import React, { FunctionComponent, ElementType } from "react";
import classNames from "classnames";

import SVGCalendar from "./assets/SVGCalendar";
import SVGAdd from "./assets/SVGAdd";
import SVGLeftArrow from "./assets/SVGLeftArrow";
import SVGRightArrow from "./assets/SVGRightArrow";

import "./Icon.scss";

const Icon: FunctionComponent<IconProps> = ({
  className,
  color = "#F9F9F9",
  size = 50,
  name,
  onClick,
}: IconProps) => {
  const iconProps = { color, size };
  const renderIcon: ElementType = (name: IconType) => {
    switch (name) {
      case "calendar":
        return <SVGCalendar {...iconProps} />;
      case "add":
        return <SVGAdd {...iconProps} />;
      case "leftArrow":
        return <SVGLeftArrow {...iconProps} />;
      case "rightArrow":
        return <SVGRightArrow {...iconProps} />;
      default:
        return null;
    }
  };
  return (
    <div onClick={onClick} className={classNames("icon", className)}>{renderIcon(name)}</div>
  );
};

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
  name: IconType;
  onClick?: VoidFunction;
}

export type IconType = "calendar" | "add" | "leftArrow" | "rightArrow";

export default Icon;
