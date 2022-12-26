import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function LineCard({ filterProduct }) {
  return (
    <>
      {filterProduct &&
        filterProduct.map((element) => {
          const { _id, price, image, title, rating } = element;
          return (
            <div className="-z-10" key={_id}>
              <Link to={`/product/info/${_id}`} className="flex border-b py-3">
                <LazyLoadImage
                  alt="card"
                  effect="blur"
                  className="w-28 object-cover h-auto"
                  src={image[0].url}
                />

                <div>
                  <p className="text-[0.8rem] mt-2 mb-3 capitalize ">{title}</p>
                  <Rating rating={rating} />
                  <div className="flex">
                    <div>Price:</div>
                    <div className="text-orange-400 ">
                      {price}
                      <TbCurrencyTaka className="inline-block text-xl" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default LineCard;
