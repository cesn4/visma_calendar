import React, { FunctionComponent, ReactNode } from "react";

import Calendar from "~/components/Calendar";

import "./PrimaryLayout.scss";

const PrimaryLayout: FunctionComponent<PrimaryLayoutProps> = ({
  children,
}: PrimaryLayoutProps) => {
  const className = "primary-layout";
  return (
    <div className={className}>
      <Calendar />
      {children}
    </div>
  );
};

interface PrimaryLayoutProps {
  children: ReactNode;
}

export default PrimaryLayout;
