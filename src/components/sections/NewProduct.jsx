import React from "react";
import { useGetProductsQuery } from "../../app/services/productApi";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";
import LoadingCard from "../utilities/LoadingCard";

export default function NewProduct() {
  const{isLoading,data}=useGetProductsQuery("category=new")
  console.log(data)
  

  return (
    <div>
      <Header title="new product" />
      <CardContainer col="4">
      {
        false?[1,2,3,4,5].map((ele,id)=><LoadingCard key={id}/>):<Card filterProduct={data} />
        }    
      </CardContainer>
    </div>
  );
}
