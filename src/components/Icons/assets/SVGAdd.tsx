import React, { FunctionComponent } from "react";

const SVGAdd: FunctionComponent<SVGIconsProps> = ({
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
        id="Icon_simple-addthis"
        data-name="Icon simple-addthis"
        d="M37.5,28.3H28.123v9.374h-6.25V28.3H12.5V22.048h9.375V12.672h6.252v9.376H37.5ZM43.75.171H6.25A6.269,6.269,0,0,0,0,6.421v37.5a6.268,6.268,0,0,0,6.25,6.246h37.5A6.271,6.271,0,0,0,50,43.924V6.421A6.272,6.272,0,0,0,43.75.171Z"
        transform="translate(0 -0.171)"
        fill={color}
      />
    </svg>
  );
};

interface SVGIconsProps {
  size: number;
  color: string;
}

export default SVGAdd;
