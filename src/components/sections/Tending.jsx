import React from "react";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function Tending({products}) {
  
  return (
    <>
      <Header title="best selling" />
      <CardContainer col="4">
        {products&&<Card filterProduct={products} />}
      </CardContainer>
    </>
  );
}
