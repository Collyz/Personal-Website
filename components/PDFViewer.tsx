'use client';

import { useEffect, useRef, useState } from 'react';
import type {
    PDFDocumentProxy,
    PDFDocumentLoadingTask,
    RenderTask,
} from 'pdfjs-dist/types/src/display/api';

type PDFViewerProps = {
    url: string;
    className?: string;
};

export default function PDFViewer({ url, className }: PDFViewerProps) {
    // The inner wrapper is what we measure: its content width (excluding the
    // outer padding) is the width each page canvas is rendered to.
    const measureRef = useRef<HTMLDivElement>(null);
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
    const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
    const [numPages, setNumPages] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Load the document. pdf.js is imported dynamically so it only runs in the
    // browser; a top-level import would be evaluated during SSR, where DOMMatrix
    // and the canvas API don't exist ("ReferenceError: DOMMatrix is not defined").
    useEffect(() => {
        let cancelled = false;
        let loadingTask: PDFDocumentLoadingTask | null = null;

        (async () => {
            try {
                const pdfjsLib = await import('pdfjs-dist');
                pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
                if (cancelled) return;

                loadingTask = pdfjsLib.getDocument({ url });
                const doc = await loadingTask.promise;
                if (cancelled) return;

                canvasRefs.current = [];
                setNumPages(doc.numPages);
                setPdf(doc);
            } catch (err) {
                if (!cancelled) {
                    setError('Failed to load resume.');
                    console.error(err);
                }
            }
        })();

        return () => {
            cancelled = true;
            loadingTask?.destroy();
        };
    }, [url]);

    // Render every page into its canvas, and re-render whenever the available
    // width changes so the pages stay sharp and fit the container (resizeable).
    useEffect(() => {
        if (!pdf) return;
        let cancelled = false;
        let renderTasks: RenderTask[] = [];
        let lastWidth = 0;

        const renderAll = async () => {
            const width = measureRef.current?.clientWidth ?? 0;
            if (!width || cancelled) return;
            lastWidth = width;

            // Cancel any in-flight renders from a previous pass (e.g. a resize).
            renderTasks.forEach((task) => task.cancel());
            renderTasks = [];

            const outputScale = window.devicePixelRatio || 1;

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                if (cancelled || width !== lastWidth) return;

                const canvas = canvasRefs.current[pageNum - 1];
                if (!canvas) continue;
                const context = canvas.getContext('2d');
                if (!context) continue;

                const unscaled = page.getViewport({ scale: 1 });
                const viewport = page.getViewport({ scale: width / unscaled.width });

                // The bitmap is rendered at devicePixelRatio for HiDPI sharpness;
                // CSS (w-full / h-auto) scales it back down to the content width.
                canvas.width = Math.floor(viewport.width * outputScale);
                canvas.height = Math.floor(viewport.height * outputScale);

                const task = page.render({
                    canvas,
                    canvasContext: context,
                    viewport,
                    transform:
                        outputScale !== 1
                            ? [outputScale, 0, 0, outputScale, 0, 0]
                            : undefined,
                });
                renderTasks.push(task);

                try {
                    await task.promise;
                } catch (err) {
                    // RenderingCancelledException is expected on resize/unmount.
                    if (!cancelled && (err as Error)?.name !== 'RenderingCancelledException') {
                        throw err;
                    }
                }
            }
        };

        renderAll().catch((err) => {
            if (!cancelled) {
                setError('Failed to load resume.');
                console.error(err);
            }
        });

        // Re-render only when the width actually changes (ignore height-only
        // changes the renders themselves cause, which would otherwise loop).
        let resizeObserver: ResizeObserver | null = null;
        if (measureRef.current) {
            resizeObserver = new ResizeObserver(() => {
                const width = measureRef.current?.clientWidth ?? 0;
                if (width && width !== lastWidth) renderAll();
            });
            resizeObserver.observe(measureRef.current);
        }

        return () => {
            cancelled = true;
            resizeObserver?.disconnect();
            renderTasks.forEach((task) => task.cancel());
        };
    }, [pdf]);

    if (error) {
        return (
            <div className={className}>
                <p className="text-center text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className={className}>
            <div ref={measureRef} className="flex flex-col gap-4 sm:gap-6">
                {Array.from({ length: numPages }, (_, i) => (
                    <canvas
                        key={i}
                        ref={(el) => {
                            canvasRefs.current[i] = el;
                        }}
                        aria-label={`Resume page ${i + 1} of ${numPages}`}
                        className="block h-auto w-full shadow-md"
                    />
                ))}
            </div>
        </div>
    );
}
