import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

import { Link } from "react-router-dom";
import Rating from "./Rating";

function LineCard({ product }) {
  return (
    <div>
      <Link to={`/product/info/${product?._id}`} className="flex border-b py-3">
        <img
          className="w-28 object-cover h-auto"
          src={product?.image[0].url}
          alt="card"
        />

        <div>
          <p className="text-[0.8rem] mt-2 mb-3 capitalize ">{product?.title}</p>
          <Rating rating={product?.rating} />
          <div className="flex">
            <div>Price:</div>
            <div className="text-orange-400 ">
              {product?.price}
              <TbCurrencyTaka className="inline-block text-xl" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LineCard;
