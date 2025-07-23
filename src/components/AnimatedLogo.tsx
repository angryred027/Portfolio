"use client";

import React from "react";

export function AnimatedLogo() {
  const size = 200;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
        style={{ transformOrigin: "50% 50%" }}
      >
        <g className="animate-spin" style={{ transformOrigin: "center" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#9CA3AF" // Tailwind gray-400
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.25} ${circumference}`}
            strokeDashoffset="0"
          />
        </g>
      </svg>

      {/* Avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/brand/favicon-192x192.png"
          alt="Angry Red"
          className="w-[120px] h-[120px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}
