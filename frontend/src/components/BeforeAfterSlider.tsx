"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--color-forest)] sm:text-4xl mb-4">
          The Transformation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Drag the slider to see how shredded plastic waste from Dhading becomes high-grade construction material.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl border border-gray-100"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER Image (Background) - Finished Product */}
          <div className="absolute inset-0 bg-[var(--color-leaf)]/20 flex flex-col items-end justify-center pr-12 sm:pr-24">
            <span className="bg-white/90 text-[var(--color-forest)] font-bold px-4 py-2 rounded-lg shadow-sm text-sm sm:text-base">
              AFTER: Durable PP Tile
            </span>
          </div>

          {/* BEFORE Image (Clipped overlay) - Raw Waste */}
          <div 
            className="absolute inset-0 bg-gray-700 flex flex-col items-start justify-center pl-12 sm:pl-24"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <span className="bg-white/90 text-gray-800 font-bold px-4 py-2 rounded-lg shadow-sm text-sm sm:text-base">
              BEFORE: Plastic Waste
            </span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[var(--color-forest)]">
              <ArrowLeftRight className="w-4 h-4 text-[var(--color-forest)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
