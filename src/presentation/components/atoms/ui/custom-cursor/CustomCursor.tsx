'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | undefined>(undefined);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device has hover capability (desktop with mouse)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speed = prefersReducedMotion ? 1 : 0.2;

    // Check if element is clickable
    const isClickableElement = (element: Element | null): boolean => {
      if (!element) return false;
      
      const clickableSelectors = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'label',
        'svg',
        '[role="button"]',
        '[onclick]',
        '[data-clickable]',
        '[tabindex]'
      ];
      
      return clickableSelectors.some(selector => {
        try {
          return element.matches(selector) || element.closest(selector) !== null;
        } catch {
          return false;
        }
      });
    };

    // Update mouse position on mousemove
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      // Check if hovering over clickable element
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      const shouldExpand = isClickableElement(elementUnderCursor);
      setIsHovering(shouldExpand);
    };

    // Animation loop using requestAnimationFrame
    const updateCursorPosition = () => {
      const diffX = mousePos.current.x - cursorPos.current.x;
      const diffY = mousePos.current.y - cursorPos.current.y;

      // Linear interpolation for smooth following
      cursorPos.current.x += diffX * speed;
      cursorPos.current.y += diffY * speed;

      // Apply transform to cursor element
      // Offset by half of the current rendered size for perfect centering
      if (cursorRef.current) {
        const { offsetWidth, offsetHeight } = cursorRef.current;
        const halfWidth = offsetWidth / 2;
        const halfHeight = offsetHeight / 2;
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - halfWidth}px, ${cursorPos.current.y - halfHeight}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    };

    // Start listening and animating
    window.addEventListener('mousemove', updateMousePosition);
    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const baseSize = 10;
  const expandedSize = 40;
  const cursorSize = isHovering ? expandedSize : baseSize;

  return (
    <div 
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-[9999] [will-change:transform,width,height] -translate-x-[100px] -translate-y-[100px] transition-[width,height] duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isHovering ? "w-10 h-10" : "w-2.5 h-2.5"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full [backdrop-filter:invert(100%)] transition-[background-color,border-color,box-shadow] duration-250 ease-out",
          isHovering
            ? "border-none bg-white/50 shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            : "border-2 border-black/30 bg-white/10 shadow-none"
        )}
      />
    </div>
  );
}
