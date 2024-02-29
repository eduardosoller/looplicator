import * as React from "react";
export default function SquareArrowSvg({
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
      viewBox="0 0 21 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.415527" y="0.921265" width="5" height="5" fill={color} />
      <rect x="5.41553" y="5.92126" width="5" height="5" fill={color} />
      <rect x="10.4155" y="10.9213" width="5" height="5" fill={color} />
      <rect x="15.415" y="15.9213" width="5" height="5" fill={color} />
      <rect
        width="5"
        height="5"
        transform="matrix(1 0 0 -1 0.415527 35.9214)"
        fill={color}
      />
      <rect
        width="5"
        height="5"
        transform="matrix(1 0 0 -1 5.41553 30.9213)"
        fill={color}
      />
      <rect
        width="5"
        height="5"
        transform="matrix(1 0 0 -1 10.4155 25.9213)"
        fill={color}
      />
    </svg>
  );
}
