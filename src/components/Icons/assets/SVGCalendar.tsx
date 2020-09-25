import React, { FunctionComponent } from "react";

const SVGCalendar: FunctionComponent<SVGIconsProps> = ({
  color,
  size,
}: SVGIconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <path
        id="Icon_awesome-calendar"
        data-name="Icon awesome-calendar"
        d="M1.339,18.75H48.661A1.268,1.268,0,0,1,50,19.922V45.313C50,47.9,47.6,50,44.643,50H5.357C2.4,50,0,47.9,0,45.313V19.922A1.268,1.268,0,0,1,1.339,18.75ZM50,14.453V10.938C50,8.35,47.6,6.25,44.643,6.25H39.286V1.172A1.268,1.268,0,0,0,37.946,0H33.482a1.268,1.268,0,0,0-1.339,1.172V6.25H17.857V1.172A1.268,1.268,0,0,0,16.518,0H12.054a1.268,1.268,0,0,0-1.339,1.172V6.25H5.357C2.4,6.25,0,8.35,0,10.938v3.516a1.268,1.268,0,0,0,1.339,1.172H48.661A1.268,1.268,0,0,0,50,14.453Z"
        fill={color}
      />
    </svg>
  );
};

interface SVGIconsProps {
  size: number;
  color: string;
}

export default SVGCalendar;
