'use client';
import React, { useEffect, useState } from 'react';

import FadeInText from '../components/FadeInText';
import Script from 'next/script';

import ThreeScene from '@/components/MobiusStrip';

export default function HomeContent() {

  // HINT STATE
  const [showHint, setShowHint] = useState(false);
  const interactedKey = 'mobius-interacted';

  useEffect(() => {
    const hasInteracted = localStorage.getItem(interactedKey);

    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    const handleFirstInteraction = () => {
      localStorage.setItem(interactedKey, 'true');
      setShowHint(false);

      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, []);

  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">

        {/* Header */}
        <div className="flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
          <FadeInText
            text="Hi, I'm Mohammed, a Computer Scientist at LS Technologies"
            className="pt-16"
            additative={true}
          />
        </div>

        {/* Scene */}
        <div className="flex flex-col sm:flex-row gap-8">

          <div className="fixed inset-0 w-screen h-screen -z-1">

            {/* Hint Overlay */}
            {showHint && (
              <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
                <div className="bg-black/60 text-white px-6 py-3 rounded-xl text-lg backdrop-blur-md animate-pulse">
                  Tap or Click to Interact
                </div>
              </div>
            )}

            {/* Canvas */}
            {/* <canvas
              id="three-canvas"
              className="fixed inset-0 w-screen h-screen -z-10 block"
            /> */}
            <ThreeScene />

          </div>

        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}


