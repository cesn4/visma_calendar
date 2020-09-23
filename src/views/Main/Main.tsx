import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import PrimaryLayout from "~/layouts/PrimaryLayout";

const Main: FunctionComponent = () => {
  const { slug } = useParams();
  return <PrimaryLayout>{slug}</PrimaryLayout>;
};

export default Main;
