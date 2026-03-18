"use client";

import { useRef, useState, useEffect, useCallback, ReactNode } from "react";

interface FullscreenWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function FullscreenWrapper({
  children,
  title,
}: FullscreenWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (fs) {
        setShowHint(true);
      }
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  // Fade out hint after 2 seconds
  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 2000);
    return () => clearTimeout(timer);
  }, [showHint]);

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "relative flex flex-col items-center justify-center w-full h-full bg-gray-950 overflow-auto"
          : "relative"
      }
    >
      {/* Expand button (normal mode) */}
      {!isFullscreen && (
        <button
          onClick={toggleFullscreen}
          aria-label="Enter fullscreen"
          className="absolute top-2 right-2 z-10 p-1.5 rounded-md bg-white/80 hover:bg-white border border-gray-200 shadow-sm transition-all duration-150 hover:scale-105 active:scale-95"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Fullscreen header + close button */}
      {isFullscreen && (
        <>
          {title && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
              <h2 className="text-white/90 text-lg font-semibold tracking-tight">
                {title}
              </h2>
            </div>
          )}
          <button
            onClick={toggleFullscreen}
            aria-label="Exit fullscreen"
            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-150"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Escape hint */}
      {isFullscreen && (
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-medium transition-opacity duration-500 ${
            showHint ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Press Escape to exit fullscreen
        </div>
      )}

      {/* Content */}
      <div
        className={
          isFullscreen
            ? "w-full max-w-4xl px-6 py-16 flex items-center justify-center"
            : ""
        }
      >
        <div
          className={
            isFullscreen ? "w-full transform scale-100" : ""
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
