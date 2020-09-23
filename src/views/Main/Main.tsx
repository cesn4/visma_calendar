import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import Schedule from "~/components/Schedule";
import PrimaryLayout from "~/layouts/PrimaryLayout";

const Main: FunctionComponent = () => {
  const { slug } = useParams();
  return (
    <PrimaryLayout>
      <Schedule date={slug} />
    </PrimaryLayout>
  );
};

export default Main;
