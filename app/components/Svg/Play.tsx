import * as React from "react";
export default function PlaySvg({
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4065 10.128C12.6592 9.97184 12.9748 9.95764 13.2405 10.0905L23.5262 15.2334C23.8166 15.3785 24 15.6753 24 16C24 16.3247 23.8166 16.6215 23.5262 16.7667L13.2405 21.9095C12.9748 22.0424 12.6592 22.0282 12.4065 21.872C12.1538 21.7158 12 21.4399 12 21.1429V10.8571C12 10.5601 12.1538 10.2842 12.4065 10.128Z"
        fill={color}
      />
    </svg>
  );
}
