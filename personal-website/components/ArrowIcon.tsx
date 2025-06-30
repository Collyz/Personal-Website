// components/ArrowIcon.tsx

import React from 'react';

type ArrowIconProps = {
  className?: string;
};

export default function ArrowIcon({ className = '' }: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`inline-block transform transition-transform duration-400 ease-in-out 
        group-hover/inner:scale-[1.2] 
        group-hover/inner:translate-x-[2px] 
        group-hover/inner:-translate-y-[7px] 
        h-4 w-4 shrink-0 ml-1 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
