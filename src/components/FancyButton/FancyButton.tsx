import React, { FunctionComponent } from "react";

import "./FancyButton.scss";

const FancyButton: FunctionComponent<FancyButtonProps> = ({
  label,
  onClick,
}: FancyButtonProps) => {
  const className = "fancy-button";
  return (
    <div onClick={onClick} className={className}>
      <span className={`${className}__label`}>{label}</span>
    </div>
  );
};

export interface FancyButtonProps {
  label: string;
  onClick: VoidFunction;
}

export default FancyButton;
