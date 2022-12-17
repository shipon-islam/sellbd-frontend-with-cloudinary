import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import Address from "../components/utilities/Address";
import Layout from "../components/utilities/Layout";
import { contactSchema } from "../components/YapSchema/Yap";

export default function Contact() {
  const buttonRef = useRef(null);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    buttonRef.current.disabled = true;
    setloading(true);
    const mail = await emailjs.send(
      "service_vs3351g",
      "template_8vdc61f",
      data,
      "user_0NEpiHFRwUkFLNiJNBPi0"
    );
    if (mail) {
      buttonRef.current.disabled = false;
      setloading(false);
      toast.success("send successfuly");
    }
  };
  console.log(errors);

  return (
    <Layout>
      <ToastContainer />
      <div className="md:grid-cols-[2fr,1fr] grid  bg-gray-200 px-2 py-12 sm:p-10 mt-4">
        <div className="order-2 md:order-1">
          <div className="w-full  mt-8 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.2860298863047!2d89.82976452725005!3d24.751380328021366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd9b5f340b4b7d%3A0x8db1be95ad03cc0!2sAramnagar%20Bazar%2C%20Sarishabari!5e0!3m2!1sen!2sbd!4v1671188746741!5m2!1sen!2sbd"
              className="border-none h-[320px]  max-w-[550px] w-[95%] mx-auto "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[95%] mx-auto order-1 md:order-2"
        >
          <h3 className="text-xl text-gray-700 font-medium uppercase mb-3 ml-1">
            contact us-
          </h3>
          <div>
            <input
              className="outline-none block  bg-white py-3 pl-3 w-full rounded-lg font-medium font-montserrat text-lg"
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />
            <small className="ml-2 text-red-400 ">
              {errors?.name?.message}
            </small>
          </div>
          <div className="my-6">
            <input
              className="outline-none block  bg-white py-3 pl-3 w-full rounded-lg font-medium font-montserrat text-lg"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            <small className="ml-2 text-red-400 ">
              {errors?.email?.message}
            </small>
          </div>
          <div>
            <textarea
              className="outline-none block  bg-white py-3 pl-3 w-full rounded-lg font-medium font-montserrat text-lg"
              type="text"
              placeholder="Write message"
              {...register("message")}
            ></textarea>
            <small className="ml-2 text-red-400 ">
              {errors?.message?.message}
            </small>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            className="bg-orange-300 block w-full
            disabled:bg-orange-300/70  disabled:text-blue/50 font-2xl uppercase font-bold text-gray-500 py-3 mt-8 rounded-lg  "
          >
            {loading ? (
              <div
                className={`flex
            justify-center items-center gap-x-2 `}
              >
                <span className=" inline-block w-6 h-6 rounded-full border-r-4 border-l-4 border-gray-700 animate-spin"></span>
                Loading...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <div className="flex md:justify-between justify-center flex-wrap-reverse gap-4 my-8">
        <Address
          icon={ImLocation2}
          title="address"
          name1="Sell BD,Sarishabari-tarakandi,"
          name2="road 20, Mymensingh,Bangladesh"
        />
        <Address
          icon={SiMinutemailer}
          title="email"
          name1="sellbd262@gmail.com,"
          name2="sellbd566@Yahoo.com"
        />
        <Address
          icon={BsTelephoneInboundFill}
          title="call"
          name1="+8801641-758653"
          name2="+8801632-042970"
        />
      </div>
    </Layout>
  );
}
