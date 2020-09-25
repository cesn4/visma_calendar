import React, { FunctionComponent } from "react";

const SVGRightArrow: FunctionComponent<SVGIconsProps> = ({
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
        id="Icon_ionic-ios-arrow-dropright"
        data-name="Icon ionic-ios-arrow-dropright"
        transform="translate(-3.375 -3.375)"
      >
        <path
          fill={color}
          id="Path_15"
          data-name="Path 15"
          d="M14.815,10.378a1.362,1.362,0,0,1,1.92,0l6.708,6.729a1.356,1.356,0,0,1,.042,1.87l-6.609,6.63a1.355,1.355,0,1,1-1.92-1.912l5.618-5.7-5.759-5.7A1.341,1.341,0,0,1,14.815,10.378Z"
        />
        <path
          fill={color}
          id="Path_16"
          data-name="Path 16"
          d="M3.375,18A14.625,14.625,0,1,0,18,3.375,14.623,14.623,0,0,0,3.375,18Zm2.25,0A12.37,12.37,0,0,1,26.747,9.253,12.37,12.37,0,1,1,9.253,26.747,12.269,12.269,0,0,1,5.625,18Z"
        />
      </g>
    </svg>
  );
};

interface SVGIconsProps {
  size: number;
  color: string;
}

export default SVGRightArrow;
