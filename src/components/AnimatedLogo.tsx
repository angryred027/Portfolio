"use client";

import React from "react";

export function AnimatedLogo() {
  const size = 200;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-[200px] h-[200px]">
      {/* SVG Circle Animation */}
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#D1D5DB" // smooth gray color
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={circumference}
            to={0}
            dur="1s"
            repeatCount="1"
            fill="freeze"
          />
        </circle>
      </svg>

      {/* Centered Avatar */}
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
