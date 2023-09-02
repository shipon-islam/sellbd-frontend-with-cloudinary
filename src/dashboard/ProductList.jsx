import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDeleteProductMutation, useGetProductsQuery } from "../app/services/productApi";
import Layout from "../components/utilities/Layout";
import Rating from "../components/utilities/Rating";
import Navbar from "./Navbar";
function ProductList() {
  const {isLoading,data:product}=useGetProductsQuery()
  const [deleteProduct]=useDeleteProductMutation()
  const deleteProductFunc = async (_id) => {
    try {
      const { data } = deleteProduct(_id);     
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (_id) => {
    const myFunc = deleteProductFunc(_id);
    toast.promise(myFunc, {
      pending: "loading...",
      success: "delete product successfuly👌",
      error: "something went wrong🤯",
    });
  };

  return (
    <Layout>
      <Navbar />
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-[55vh]">
        {product &&
          product.map((ele) => {
            return (
              <div className="relative" key={ele._id}>
                <button
                  onClick={() => handleDelete(ele._id)}
                  className="absolute right-0 bg-gray-300 block px-2 font-bold 
                  hover:text-red-500
                  rounded-full text-gray-800"
                >
                  x
                </button>
                <Link
                  to={`/dashboard/product/edit/${ele._id}`}
                  className="flex border-b py-3"
                >
                  <img
                    className="w-28 object-cover h-auto"
                    src={ele.image[0].url}
                    alt="card"
                  />
                  <div>
                    <p className="text-[0.8rem] mt-2 mb-3 ">{ele.title}</p>
                    <Rating rating={ele.rating} />
                    <div className="flex">
                      <div>Price:</div>
                      <div className="text-orange-400 ">
                        {ele.price}
                        <TbCurrencyTaka className="inline-block text-xl" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export default ProductList;
