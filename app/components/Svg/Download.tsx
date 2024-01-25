import * as React from "react";
export default function DownloadSvg({
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 11L8.5 14L12 11" stroke="black" strokeLinecap="round" />
      <path d="M8.5 8V14" stroke="black" strokeLinecap="round" />
      <rect x="0.5" y="4.5" width="16" height="13" rx="1.5" stroke={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0886 1H2.91122L1.99986 4H15L14.0886 1ZM2.91122 0C2.51871 0 2.1625 0.229623 2.00043 0.587112L0.499861 4.5C0.199752 5.16201 0.824362 4.5 1.55122 4.5H15.4486C16.1755 4.5 16.8001 5.16201 16.5 4.5L14.9994 0.587112C14.8374 0.229623 14.4811 0 14.0886 0H2.91122Z"
        fill={color}
      />
    </svg>
  );
}
