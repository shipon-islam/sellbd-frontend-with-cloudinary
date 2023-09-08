import React from "react";
import { useGetProductsQuery } from "../../app/services/productApi";
import Card from "../utilities/Card";
import Header from "../utilities/Header";
import LoadingCard from "../utilities/LoadingCard";

export default function Tending({products}) {
  const {isLoading,data}=useGetProductsQuery("category=tending")
  
  return (
    <>
      <Header title="best selling" />
      <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {isLoading
          ? [1, 2, 3, 4, 5].map((ele, id) => <LoadingCard key={id} />)
          : data.slice(0,5).map((product) => <Card key={product._id} product={product} />)}
      </div>
    </>
  );
}
