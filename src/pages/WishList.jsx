import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/utilities/Card";
import Layout from "../components/utilities/Layout";
import WraperSideLinks from "../components/utilities/WraperSideLinks";
import EmptyItem from "./EmptyItem";

export default function WishList() {
  const { wishlist } = useSelector((state) => state.cardList);

  return (
    <Layout>
      <WraperSideLinks page="wish list">
        {wishlist?.length > 0 ? (
          <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {wishlist.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyItem title="wishlist" />
        )}
      </WraperSideLinks>
    </Layout>
  );
}
{
  /* <Layout>
{wishlist?.length > 0 ? (
  <WraperSideLinks page="wish list">
    <div className=" mt-7">
      <CardContainer>
        <Card filterProduct={wishlist} />
      </CardContainer>
    </div>
  </WraperSideLinks>
) : (
  <EmptyItem title="wishlist" />
)}
</Layout>// */
}
