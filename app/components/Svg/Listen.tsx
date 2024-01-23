import * as React from "react";
export default function ListenSvg({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 18.967h5.7l3.04-6.6 3.04 10.266 3.04-14.666 2.28 20.9L20.76 1l2.28 21.633 3.8-14.666 2.28 11H39"
      />
    </svg>
  );
}
