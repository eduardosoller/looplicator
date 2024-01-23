import * as React from "react";
export default function AvatarSvg({
  width,
  height,
  color,
  secondary,
}: {
  width: number;
  height: number;
  color: string;
  secondary: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 97 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="48.5" cy="48.5" r="48.5" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.0001 63C73.957 57.7968 77 50.7538 77 43C77 26.9837 64.0163 14 48 14C31.9837 14 19 26.9837 19 43C19 50.7538 22.043 57.7968 26.9999 63H69.0001Z"
        fill={secondary}
      />
      <rect
        x="70.6286"
        y="36.5143"
        width="10.3714"
        height="20.7429"
        rx="5.18571"
        fill={secondary}
      />
      <rect
        x="15"
        y="36.5143"
        width="10.3714"
        height="20.7429"
        rx="5.18571"
        fill={secondary}
      />
      <path
        d="M61.2 35C58.32 35 55.6 36.1693 53.66 38.1948L39.6 51.2246C38.32 52.561 36.62 53.2919 34.8 53.2919C31.06 53.2919 28.02 50.1388 28.02 46.234C28.02 42.3293 31.06 39.1762 34.8 39.1762C36.62 39.1762 38.32 39.9071 39.68 41.327L41.94 43.4151L44.96 40.617L42.44 38.2992C40.4 36.1693 37.68 35 34.8 35C28.84 35 24 40.0532 24 46.234C24 52.4149 28.84 57.4681 34.8 57.4681C37.68 57.4681 40.4 56.2987 42.34 54.2733L56.4 41.2435C57.68 39.9071 59.38 39.1762 61.2 39.1762C64.94 39.1762 67.98 42.3293 67.98 46.234C67.98 50.1388 64.94 53.2919 61.2 53.2919C59.4 53.2919 57.68 52.561 56.32 51.1411L54.04 49.0321L51.02 51.8302L53.56 54.1689C55.6 56.2779 58.3 57.4472 61.2 57.4472C67.16 57.4472 72 52.4149 72 46.2132C72 40.0115 67.16 35 61.2 35Z"
        fill={color}
      />
      <circle cx="35.5" cy="46.5" r="2.5" fill={color} />
      <path d="M36.5 79L29.5 63V61H36.5V79Z" fill={secondary} />
      <path d="M59.5 79L66.5 63V61H59.5V79Z" fill={secondary} />
      <rect x="35" y="61" width="26" height="26" rx="2" fill={secondary} />
      <line x1="40" y1="82" x2="40" y2="68" stroke={color} strokeWidth="2" />
      <path d="M44 80V71" stroke={color} strokeWidth="2" />
      <path d="M48 82V70" stroke={color} strokeWidth="2" />
      <path d="M52 80V71" stroke={color} strokeWidth="2" />
      <line x1="56" y1="82" x2="56" y2="68" stroke={color} strokeWidth="2" />
    </svg>
  );
}
