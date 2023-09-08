import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useGetProductByIdQuery, useUpdateProductByIdMutation } from "../app/services/productApi";
import Form from "../components/utilities/Form";
import Layout from "../components/utilities/Layout";
import Navbar from "./Navbar";
import TextInput from "./TextInput";

export default function ProductEdit() {
  const { _id } = useParams();
  const [images, setImages] = useState([]);
  const [updateProductById,{isLoading}]=useUpdateProductByIdMutation()
  const {data:isExistProduct}=useGetProductByIdQuery(_id)

  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    title: "",
    category: "",
    subcategory: "",
    price: "",
    rating: "",
    discountprice: "",
    desc: "",
  });
  const [features, setFeatures] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
  });
  useEffect(() => {
    if(isExistProduct){
    const {
      name,
      title,
      category,
      subcategory,
      price,
      rating,
      discountprice,
      desc,
    } = isExistProduct;
    const [feature1, feature2, feature3, feature4, feature5, feature6] =
    isExistProduct.features;
    setProduct({
      name,
      title,
      rating,
      category,
      subcategory,
      price,
      discountprice,
      desc,
    });
    setFeatures({
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
    });
  }
  }, [isExistProduct]);

  const featureChange = (e) => {
    let { name, value } = e.target;
    setFeatures({ ...features, [name]: value });
  };

  const productInfoChange = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const updateProduct = async () => {
    let formdata = new FormData();
    Object.keys(product).forEach((item) => {
      formdata.append(item, product[item]);
    });

    Object.values(features).forEach((values) => {
      formdata.append("features[]", values);
    });

    for (let image of images) {
      formdata.append("image[]", image);
    }

    for (let image of isExistProduct.image) {
      formdata.append("image[]", image);
    }

    try {
      const res= await updateProductById({_id,formdata})
      console.log(res)
      return res.data;
    } catch (error) {
      console.log(error);
      return error
      
    }
  };

  //send to api
  const handleSubmit =(e) => {
    e.preventDefault();
    const myFunc =updateProduct();
    toast.promise(myFunc, {
      pending: "updating...",
      success: "update successfuly👌",
      error: "something went wrong🤯",
    });
  };

  return (
    <Layout>
      <Navbar />
      <ToastContainer />
      <div className="min-h-screen">
        <div className="mx-auto w-fit mt-6">
          <h3 className="text-xl text-slate-600 capitalize">
            product add/edit information
          </h3>
          <p className="capitalize text-slate-400 text-center">
            all input box require
          </p>
        </div>
        <Form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <TextInput
              type="file"
              formname="image"
              name="image"
              multiple="multiple"
              onChange={(e) => setImages(e.target.files)}
            />
            <TextInput
              placeholder="enter name"
              type="text"
              formname="product name"
              onChange={productInfoChange}
              value={product.name}
              name="name"
            />
            <TextInput
              placeholder="enter title"
              type="text"
              formname="product title"
              onChange={productInfoChange}
              value={product.title}
              name="title"
            />
            <TextInput
              placeholder="enter price"
              type="number"
              formname="product price"
              onChange={productInfoChange}
              value={product.price}
              name="price"
            />
            <TextInput
              placeholder="enter discount"
              type="number"
              formname="discount price"
              onChange={productInfoChange}
              value={product.discountprice}
              name="discountprice"
            />
          </div>
          <div>
            <div className="mt-6">
              <p className="capitalize">category</p>
              <select
                className="focus:outline-none border border-slate-400 w-full p-2"
                onChange={productInfoChange}
                value={product.category}
                name="category"
              >
                <option>Select category</option>
                <option value="tending">Tending</option>
                <option value="technology">Technology</option>
                <option value="fashion">Fashion</option>
                <option value="clothes">Clothes</option>
              </select>
            </div>
            <div className="mt-6">
              <p className="capitalize">sub category</p>
              <select
                className="focus:outline-none border border-slate-400 w-full p-2"
                onChange={productInfoChange}
                value={product.subcategory}
                name="subcategory"
              >
                <option>Select sub category</option>
                <option value="mobile">Mobile</option>
                <option value="monitor">Monitor</option>
                <option value="television">television</option>
                <option value="mouse">Mouse</option>
                <option value="keyboard">Keyboard</option>
                <option value="router">Router</option>
                <option value="fan">Fan</option>
                <option value="shirt">Shirt</option>
                <option value="tshirt">Tshirt</option>
                <option value="panjabi">Panjabi</option>
                <option value="jeans pant">Jeans pant</option>
                <option value="wallet">Wallet</option>
                <option value="shoes">Shoes</option>
                <option value="belt">Belt</option>
                <option value="sunglass">sunglass</option>
              </select>
            </div>
            <div className="mt-6">
              <p className="capitalize">rating add</p>
              <select
                className="focus:outline-none border border-slate-400 w-full p-2"
                onChange={productInfoChange}
                value={product.rating}
                name="rating"
              >
                <option>Add Rating</option>
                <option value={2}>2</option>
                <option value={2.5}>2.5</option>
                <option value={3}>3</option>
                <option value={3.5}>3.5</option>
                <option value={4}>4</option>
                <option value={4.5}>4.5</option>
                <option value={5}>5</option>
              </select>
            </div>
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 1"
              onChange={featureChange}
              value={features.feature1}
              name="feature1"
            />
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 2"
              onChange={featureChange}
              value={features.feature2}
              name="feature2"
            />
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 3"
              onChange={featureChange}
              value={features.feature3}
              name="feature3"
            />
          </div>
          <div>
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 4"
              onChange={featureChange}
              value={features.feature4}
              name="feature4"
            />
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 5"
              onChange={featureChange}
              value={features.feature5}
              name="feature5"
            />
            <TextInput
              placeholder="add list"
              type="text"
              formname="feature 6"
              onChange={featureChange}
              value={features.feature6}
              name="feature6"
            />
            <div>
              <p className="capitalize">description</p>
              <textarea
                className="border-slate-400 border focus:outline-none w-full min-h-[9.5rem] rounded-md px-2"
                onChange={productInfoChange}
                value={product.desc}
                name="desc"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-300 text-slate-600 font-bold text-montserrat uppercase py-2  rounded-md span w-full mt-9"
            >
              submit
            </button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
