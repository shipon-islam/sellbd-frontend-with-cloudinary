import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtoWishlist, removeFromWishlist } from "../../app/feature/cardSlice";
import Rating from "./Rating";

const Card = ({ product }) => {
  const dispatch=useDispatch()
  const wishlist = useSelector((state) =>
    state.cardList.wishlist.some((ele) => ele._id === product._id)
  );
  const handleWishlist = () => {
    if (!wishlist) {
      dispatch(addtoWishlist(product));
    } else {
      dispatch(removeFromWishlist(product._id));
    }
  };
  return (
    <div className="max-w-[250px]  py-2 px-3 relative">
      <Link to={`/product/info/${product?._id}`}>
        <img
          className="w-full h-auto"
          src={product?.image[0]?.url}
          loading="lazy"
          alt="card"
        />
        <p>{product?.title}</p>
        {product?.price < product?.discountprice && (
          <p className="text-[0.8rem] mt-2 mb-3 ">
            {product?.discountprice}
            <TbCurrencyTaka className="inline-block text-lg mb-[3px]" />
          </p>
        )}
        <Rating rating={product?.rating} />
        <div className="flex justify-between">
          <div>Price:</div>
          <div className="text-orange-400">
            {product?.price}
            <TbCurrencyTaka className="inline-block text-xl mb-[3px]" />
          </div>
        </div>
      </Link>
      <button className="absolute top-2 right-2 bg-gray-200/40 p-2 rounded-full">
        {wishlist ? (
          <BsHeartFill
            onClick={handleWishlist}
            className="text-lg  text-rose-500"
          />
        ) : (
          <FaHeart onClick={handleWishlist} className="text-lg text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default Card;
