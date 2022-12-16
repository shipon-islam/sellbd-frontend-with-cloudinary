import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bandImage from "../../assets/bandlogo.png";
import payment from "../../assets/payment.jpg";

export default function Footer() {
  return (
    <footer className="bg-orange-200  font-poppins mt-16 pt-8 ">
      <div className="">
        <div className="grid grid-row-2 grid-cols-2 md:grid-cols-4 items-center  pb-6 mx-8 md:mx-16 lg:mx-24">
          <div className="col-start-1 row-start-2 md:row-start-1">
            <img
              className="w-[80%] sm:w-[60%] h-auto"
              src={bandImage}
              alt="band"
            />
          </div>
          <div className="justify-self-center md:justify-self-start">
            <h3 className="text-md font-semibold capitalize text-gray-700 ">
              categories
            </h3>

            <div>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/product"
              >
                tending
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/product"
              >
                best sell
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/product"
              >
                technology
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/product"
              >
                fashion&lifestyle
              </Link>
            </div>
          </div>
          <div className="col-start-1 row-start-1 md:col-start-2 justify-self-center md:justify-self-start">
            <h3 className="text-md font-semibold capitalize text-gray-700 ">
              Navigration
            </h3>

            <div>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/"
              >
                home
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/product"
              >
                products
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/about"
              >
                about us
              </Link>
              <Link
                className="block capitalize  font-[500] my-2 ml-1 hover:text-orange-300 text-gray-700"
                to="/contact"
              >
                contact us
              </Link>
            </div>
          </div>

          <div>
            <img
              className="w-[80%] rounded-md sm:w-[60%] md:w-[80%] h-auto"
              src={payment}
              alt="payment"
            />
          </div>
        </div>
        <div className="grid justify-items-center items-center py-4 grid-cols-1 md:grid-cols-3 bg-orange-200 px-8 md:px-16 lg:px-24 border-t border-gray-800">
          <div className="flex gap-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=100006034605524"
              target="_blank"
            >
              <FaFacebookF className=" bg-orange-300 text-slate-700 mt-1 text-4xl p-2 rounded-full hover:bg-blue-500 hover:text-gray-50" />
            </a>
            <a href="/twiter" target="_blank">
              <FaTwitter className=" bg-orange-300 text-slate-700 mt-1 text-4xl p-2 rounded-full hover:bg-blue-400 hover:text-gray-50" />
            </a>
            <a
              href="https://www.linkedin.com/in/shipon-islam-344a8a232/"
              target="_blank"
            >
              <FaLinkedinIn className=" bg-orange-300 text-slate-700 mt-1 text-4xl p-2 rounded-full hover:bg-blue-500 hover:text-gray-50" />
            </a>
            <a
              href="https://www.instagram.com/oniyomer_shohor/"
              target="_blank"
            >
              <FaInstagram className=" bg-orange-300 text-slate-700 mt-1 text-4xl p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:via-rose-500 hover:to-yellow-500  hover:text-gray-50" />
            </a>
          </div>
          <div className="mt-3 md:mt-0 text-slate-800 ">
            <AiOutlineCopyrightCircle className="inline-block text-xl mb-1  text-gray-800" />
            2022 Sell BD, All Rights Reserved
          </div>
          <div className="text-slate-800 ">Developed By Shipon Islam</div>
        </div>
      </div>
    </footer>
  );
}
