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
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "relative flex flex-col items-center justify-center w-full h-full bg-white overflow-auto"
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

      {/* Fullscreen header: title top-left, close button top-right */}
      {isFullscreen && (
        <>
          {title && (
            <div className="absolute top-3 left-4 z-20">
              <span className="text-gray-500 text-sm font-medium">
                {title}
              </span>
            </div>
          )}
          <button
            onClick={toggleFullscreen}
            aria-label="Exit fullscreen"
            className="absolute top-3 right-3 z-20 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-150"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Content */}
      <div
        className={
          isFullscreen
            ? "w-full max-w-5xl px-8 py-14 flex items-center justify-center"
            : ""
        }
      >
        <div
          className={
            isFullscreen
              ? "w-full border border-gray-200 rounded-lg bg-white p-4 shadow-sm"
              : ""
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
