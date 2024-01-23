import * as React from "react";
export default function InstagramSvg({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.65"
        y="0.65"
        width="26.7"
        height="26.7"
        rx="5.35"
        stroke={color}
        strokeWidth="1.3"
      />
      <circle cx="14" cy="14" r="6.35" stroke={color} strokeWidth="1.3" />
      <circle cx="22.5" cy="5.5" r="1.5" fill={color} />
    </svg>
  );
}
