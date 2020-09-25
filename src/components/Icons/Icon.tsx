import React, { FunctionComponent, ElementType } from "react";
import classNames from "classnames";

import SVGCalendar from "./assets/SVGCalendar";
import SVGAdd from "./assets/SVGAdd";

import "./Icon.scss";
import SVGLeftArrow from "./assets/SVGLeftArrow";
import SVGRightArrow from "./assets/SVGRightArrow";

const Icon: FunctionComponent<IconProps> = ({
  className,
  color = "#F9F9F9",
  size = 50,
  name,
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
    <div className={classNames("icon", className)}>{renderIcon(name)}</div>
  );
};

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
  name: IconType;
}

export type IconType = "calendar" | "add" | "leftArrow" | "rightArrow";

export default Icon;
