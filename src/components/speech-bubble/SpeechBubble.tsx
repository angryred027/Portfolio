import React from "react";

type SpeechBubbleProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

export default function SpeechBubble({ children, className = "", ...props }: SpeechBubbleProps) {
    return (
        <div className={`relative ${className}`} {...props}>
            {/* SVG as background bubble */}
            <svg
                viewBox="0 0 569 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
            >
                <g transform="translate(569, 0) scale(-1, 1)">
                    <path
                        d="M79.1264 193H520.293C547.182 193 569 171.284 569 144.411V63.8811C569 37.0077 547.182 15.2013 520.293 15.2013H99.7679C96.9614 15.2013 94.0643 14.9299 91.2578 14.4775L10.593 0.181176C4.16518 -0.995101 -0.995231 5.42918 1.44916 11.4915L26.7079 73.9247C29.0617 79.7156 30.2386 85.959 30.2386 92.2023V144.501C30.4197 171.284 52.2382 193 79.1264 193Z"
                        fill="currentColor"
                    />
                </g>
            </svg>

            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center pl-16 pr-24 text-center pointer-events-none">
                <div className="text-[5%] md:text-[10%] leading-snug">
                    &ldquo;{children}
                </div>
            </div>
        </div>
    );
}
