import React from "react";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function Technology() {


  return (
    <>
      <Header title="technology" />
      <CardContainer col="4">
        <Card filterProduct={[]} />
      </CardContainer>
    </>
  );
}
