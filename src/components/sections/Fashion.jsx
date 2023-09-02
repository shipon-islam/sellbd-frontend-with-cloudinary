import React from "react";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function fashion() {


  return (
    <>
      <Header title="fashion & lifestyle" />
      <CardContainer col="4">
        <Card filterProduct={[]} />
      </CardContainer>
    </>
  );
}
