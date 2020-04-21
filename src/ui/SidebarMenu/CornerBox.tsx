import React from "react";

export const CornerBox = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}>
      <g filter="url(#prefix__filter0_ddd)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M272 0H0v72h272v-1c.573-8.588 7.412-15.428 16-16h-1c8.837 0 16-7.163 16-16s-7.163-16-16-16h1c-8.588-.573-15.427-7.412-16-16V0z"
          fill="#252F34"
        />
      </g>

      <defs>
        <filter
          id="prefix__filter0_ddd"
          x={-10}
          y={-9}
          width={323}
          height={92}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
          <feBlend in2="effect2_dropShadow" result="effect3_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
