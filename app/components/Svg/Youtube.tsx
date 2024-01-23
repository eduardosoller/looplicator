import * as React from "react";

export default function YoutubeSvg({
  color,
  width,
  height,
}: {
  color: string;
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 121 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6941 3.3318C49.438 1.86905 72.379 1.8056 103.533 3.28967C111.973 3.69174 118.583 10.6962 118.583 19.175V62.2909C118.583 70.8138 111.904 77.8395 103.413 78.1955C72.3285 79.4989 49.4572 79.4736 17.7841 78.1726C9.27863 77.8232 2.58325 70.7922 2.58325 62.2575V19.2385C2.58325 10.7375 9.22605 3.72201 17.6941 3.3318Z"
        stroke={color}
        strokeWidth="4"
      />
      <path
        d="M49.5468 58.5821V24.5429L80.5468 41.5625L49.5468 58.5821Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
