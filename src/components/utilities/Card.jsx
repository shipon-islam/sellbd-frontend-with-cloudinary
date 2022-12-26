import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ filterProduct }) => {
  return (
    <>
      {filterProduct.map((element) => {
        const { _id, price, discountprice, image, title, rating, subcategory } =
          element;
        return (
          <div key={_id} className="max-w-[250px] -z-10 py-2 px-3">
            <Link to={`/product/info/${_id}`}>
              <LazyLoadImage
                alt="card"
                effect="blur"
                width="100%"
                height="auto"
                src={image[0].url}
              />

              {price < discountprice && (
                <p
                  className="text-[0.8rem]
      mt-2 mb-3 "
                >
                  {discountprice}
                  <TbCurrencyTaka className="inline-block text-lg mb-[3px]" />
                </p>
              )}
              <Rating rating={rating} />
              <div className="flex justify-between">
                <div>Price:</div>
                <div className="text-orange-400">
                  {price}
                  <TbCurrencyTaka className="inline-block text-xl mb-[3px]" />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
