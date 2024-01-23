import * as React from "react";
export default function PauseSvg({
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
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.6667 9C10.2985 9 10 9.3299 10 9.73684V22.2632C10 22.6701 10.2985 23 10.6667 23H13.3333C13.7015 23 14 22.6701 14 22.2632V9.73684C14 9.3299 13.7015 9 13.3333 9H10.6667ZM10.6667 9.74763V9.73684H10.6669L10.6667 9.74763ZM18 9.73684C18 9.3299 18.2985 9 18.6667 9H21.3333C21.7015 9 22 9.3299 22 9.73684V22.2632C22 22.6701 21.7015 23 21.3333 23H18.6667C18.2985 23 18 22.6701 18 22.2632V9.73684ZM18.6667 9.73684H18.6667V22.2632L18.6667 22.2632V9.73684Z"
        fill={color}
      />
    </svg>
  );
}
