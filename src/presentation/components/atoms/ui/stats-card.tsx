"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface StatsCardProps {
  className?: string;
}

export function StatsCard({ className }: StatsCardProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds for the full animation
    const finalValues = [1000, 700, 870000];
    const steps = 50; // number of animation steps

    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;

      // Calculate current progress (0 to 1)
      const progress = step / steps;

      // Use easing function for a more natural animation
      // easeOutQuad: t => t * (2 - t)
      const easedProgress = progress * (2 - progress);

      // Update counters based on progress
      setCount1(Math.round(easedProgress * finalValues[0]));
      setCount2(Math.round(easedProgress * finalValues[1]));
      setCount3(Math.round(easedProgress * finalValues[2]));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Format the third number to display "k" when it reaches the final value
  const formatCount3 = count3 >= 870000 ? "870k" : count3.toLocaleString();

  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-8 shadow-xs h-full flex items-center justify-center border border-[#E5E7EB] border-solid",
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[30px] font-bold text-[#111827] leading-none">
            +{count1}
          </span>
          <span className="text-sm text-[#4B5563] mt-2">
            {/* Stat 1 label — e.g. "Projects Completed" */}
            [Stat 1 label]
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[30px] font-bold text-[#111827] leading-none">
            +{count2}
          </span>
          <span className="text-sm text-[#4B5563] mt-2">
            {/* Stat 2 label — e.g. "Happy Clients" */}
            [Stat 2 label]
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[30px] font-bold text-[#111827] leading-none">
            +{formatCount3}
          </span>
          <span className="text-sm text-[#4B5563] mt-2">
            {/* Stat 3 label — e.g. "Sq Ft Installed" */}
            [Stat 3 label]
          </span>
        </div>
      </div>
    </div>
  );
}
