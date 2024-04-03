import * as React from "react";
export default function NotFoundSvg({
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
      viewBox="0 0 68 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_199_59"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
        fill="black"
      >
        <rect fill="white" width={width} height={height} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5468 43.7364C58.3127 46.0266 56.7798 48.1319 55.0001 50H52.5L47 62.5714V72C47 73.1046 46.1046 74 45 74H23C21.8954 74 21 73.1046 21 72V62.5714L15.5 50H12.9999C11.2202 48.1319 9.68725 46.0266 8.45324 43.7364C7.76825 44.07 6.99884 44.2571 6.18571 44.2571C3.32172 44.2571 1 41.9354 1 39.0714V28.7C1 25.9918 3.07597 23.7685 5.72337 23.5346C8.66157 10.6305 20.2061 1 34 1C47.7939 1 59.3384 10.6305 62.2766 23.5346C64.924 23.7685 67 25.9918 67 28.7V39.0714C67 41.9354 64.6783 44.2571 61.8143 44.2571C61.0012 44.2571 60.2317 44.07 59.5468 43.7364Z"
        />
      </mask>
      <path
        d="M55.0001 50V51H55.4286L55.7241 50.6898L55.0001 50ZM59.5468 43.7364L59.9846 42.8374L59.1217 42.4172L58.6664 43.2621L59.5468 43.7364ZM52.5 50V49H51.846L51.5838 49.5992L52.5 50ZM47 62.5714L46.0838 62.1706L46 62.3623V62.5714H47ZM21 62.5714H22V62.3623L21.9162 62.1706L21 62.5714ZM15.5 50L16.4162 49.5992L16.154 49H15.5V50ZM12.9999 50L12.2759 50.6898L12.5714 51H12.9999V50ZM8.45324 43.7364L9.33357 43.2621L8.8783 42.4172L8.01541 42.8374L8.45324 43.7364ZM5.72337 23.5346L5.81138 24.5307L6.53674 24.4666L6.69841 23.7566L5.72337 23.5346ZM62.2766 23.5346L61.3016 23.7566L61.4633 24.4666L62.1886 24.5307L62.2766 23.5346ZM55.7241 50.6898C57.5647 48.7577 59.1504 46.5801 60.4271 44.2108L58.6664 43.2621C57.475 45.4731 55.9948 47.5061 54.276 49.3102L55.7241 50.6898ZM52.5 51H55.0001V49H52.5V51ZM47.9162 62.9722L53.4162 50.4008L51.5838 49.5992L46.0838 62.1706L47.9162 62.9722ZM46 62.5714V72H48V62.5714H46ZM46 72C46 72.5523 45.5523 73 45 73V75C46.6569 75 48 73.6569 48 72H46ZM45 73H23V75H45V73ZM23 73C22.4477 73 22 72.5523 22 72H20C20 73.6569 21.3431 75 23 75V73ZM22 72V62.5714H20V72H22ZM14.5838 50.4008L20.0838 62.9722L21.9162 62.1706L16.4162 49.5992L14.5838 50.4008ZM12.9999 51H15.5V49H12.9999V51ZM7.5729 44.2108C8.84955 46.5801 10.4353 48.7577 12.2759 50.6898L13.724 49.3102C12.0052 47.5061 10.525 45.4731 9.33357 43.2621L7.5729 44.2108ZM6.18571 45.2571C7.15383 45.2571 8.07266 45.034 8.89106 44.6355L8.01541 42.8374C7.46385 43.106 6.84385 43.2571 6.18571 43.2571V45.2571ZM0 39.0714C0 42.4877 2.76944 45.2571 6.18571 45.2571V43.2571C3.87401 43.2571 2 41.3831 2 39.0714H0ZM0 28.7V39.0714H2V28.7H0ZM5.63536 22.5385C2.47639 22.8176 0 25.469 0 28.7H2C2 26.5146 3.67555 24.7194 5.81138 24.5307L5.63536 22.5385ZM34 0C19.7292 0 7.78788 9.96342 4.74833 23.3126L6.69841 23.7566C9.53527 11.2977 20.683 2 34 2V0ZM63.2517 23.3126C60.2121 9.96342 48.2708 0 34 0V2C47.317 2 58.4647 11.2977 61.3016 23.7566L63.2517 23.3126ZM68 28.7C68 25.469 65.5236 22.8176 62.3646 22.5385L62.1886 24.5307C64.3244 24.7194 66 26.5146 66 28.7H68ZM68 39.0714V28.7H66V39.0714H68ZM61.8143 45.2571C65.2306 45.2571 68 42.4877 68 39.0714H66C66 41.3831 64.126 43.2571 61.8143 43.2571V45.2571ZM59.1089 44.6355C59.9273 45.034 60.8462 45.2571 61.8143 45.2571V43.2571C61.1561 43.2571 60.5362 43.106 59.9846 42.8374L59.1089 44.6355Z"
        fill={color}
        mask="url(#path-1-outside-1_199_59)"
      />
      <line x1="26" y1="69" x2="26" y2="55" stroke={color} strokeWidth="2" />
      <path d="M30 67V58" stroke={color} strokeWidth="2" />
      <path d="M34 69V57" stroke={color} strokeWidth="2" />
      <path d="M38 67V58" stroke={color} strokeWidth="2" />
      <line x1="42" y1="69" x2="42" y2="55" stroke={color} strokeWidth="2" />
      <rect
        x="14.7027"
        y="28.4186"
        width="2.42665"
        height="14.9644"
        transform="rotate(-45 14.7027 28.4186)"
        fill={color}
      />
      <rect
        x="14.7027"
        y="28.4186"
        width="2.42665"
        height="14.9644"
        transform="rotate(-45 14.7027 28.4186)"
        fill={color}
      />
      <rect
        width="2.42665"
        height="14.9644"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27 28.4186)"
        fill={color}
      />
      <rect
        width="2.42665"
        height="14.9644"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27 28.4186)"
        fill={color}
      />
    </svg>
  );
}
