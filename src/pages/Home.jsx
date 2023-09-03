import React from "react";
import "../animation.css";
import banner1 from "../assets/banner1.png";
import ledBanner from "../assets/ledBanner.png";
import Hero from "../components/sections/Hero";
import NewProduct from "../components/sections/NewProduct";
import Tending from "../components/sections/Tending";
import Layout from "../components/utilities/Layout";

export default function Home() {  
  
  return (
    <Layout>
      <Hero />
      <img
        className="mt-24 mb-12 w-full h-24 sm:h-auto"
        src={banner1}
        alt="banner"
      />
      <Tending/>
      <img
        className="mt-24 mb-12 w-full h-24 sm:h-auto"
        src={ledBanner}
        alt="banner"
      />

      <NewProduct />
    </Layout>
  );
}
