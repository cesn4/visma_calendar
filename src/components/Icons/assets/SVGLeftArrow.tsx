import React, { FunctionComponent } from "react";

const SVGLeftArrow: FunctionComponent<SVGIconsProps> = ({
  color,
  size,
}: SVGIconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 29.25 29.25"
    >
      <g
        id="Icon_ionic-ios-arrow-dropleft"
        data-name="Icon ionic-ios-arrow-dropleft"
        transform="translate(-3.375 -3.375)"
      >
        <path
          fill={color}
          id="Path_13"
          data-name="Path 13"
          d="M21.185,10.378a1.362,1.362,0,0,0-1.92,0l-6.708,6.729a1.356,1.356,0,0,0-.042,1.87l6.609,6.63a1.355,1.355,0,1,0,1.92-1.912L15.434,18l5.759-5.7A1.356,1.356,0,0,0,21.185,10.378Z"
        />
        <path
          fill={color}
          id="Path_14"
          data-name="Path 14"
          d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm8.747,23.372A12.37,12.37,0,1,1,9.253,9.253,12.37,12.37,0,1,1,26.747,26.747Z"
        />
      </g>
    </svg>
  );
};

interface SVGIconsProps {
  size: number;
  color: string;
}

export default SVGLeftArrow;
