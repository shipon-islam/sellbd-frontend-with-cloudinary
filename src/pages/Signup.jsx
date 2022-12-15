import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../app/feature/authSlice";
import Button from "../components/utilities/Button";
import Form from "../components/utilities/Form";
import Layout from "../components/utilities/Layout";
import { registorSchema } from "../components/YapSchema/Yap";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState({
    password: true,
    cpassword: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registorSchema),
  });

  const onSubmit = (data) => {
    dispatch(signup({ data, navigate, redirect: "/" }));
    console.log(data);
  };

  const inputClass =
    "outline-none block border-orange-300 border-b-[0.1rem] bg-transparent  py-1  w-full text-lg pl-1 pr-9";

  return (
    <Layout>
      <div className="text-center mt-8">
        <h3 className="text-xl font-montserrat font-bold capitalize text-gray-700">
          create your Sell BD account
        </h3>
        <p className="">Enjoy online shopping</p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  md:grid-rows-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 645 477"
          className="row-start-2 md:row-start-1 mt-12"
        >
          <g id="undraw_secure_login_pdn4 1" clipPath="url(#clip0_159_2)">
            <path
              id="Vector"
              fill="#E6E6E6"
              d="M128.512 477c70.975 0 128.512-4.645 128.512-10.375 0-5.729-57.537-10.374-128.512-10.374S0 460.896 0 466.625C0 472.355 57.537 477 128.512 477z"
            ></path>
            <path
              id="Vector_2"
              fill="#2F2E41"
              d="M98.232 105.838c22.365-10.111 50.221-3.705 77.425.741.253-5.384 3.322-11.937.108-15.694-3.905-4.564-3.546-9.359-1.196-14.182 6.009-12.332-2.6-25.455-11.293-36.367-1.959-2.453-4.435-4.381-7.227-5.627a18.235 18.235 0 00-8.841-1.541l-16.103 1.222c-3.918.298-7.658 1.86-10.718 4.478-3.06 2.619-5.295 6.168-6.406 10.173-3.845 5.558-5.903 11.101-4.607 16.615-5.759 4.184-6.727 9.234-4.139 14.926 2.195 3.585 2.171 7.074-.1 10.466a49.563 49.563 0 00-6.759 14.271l-.144.519z"
            ></path>
            <path
              id="Vector_3"
              fill="#2F2E41"
              d="M629.716 412.359H173.891c-4.054 0-7.942-1.712-10.808-4.758-2.866-3.047-4.477-7.179-4.477-11.488 165.237-20.412 327.368-20.412 486.394 0 0 4.309-1.61 8.441-4.477 11.488-2.866 3.046-6.754 4.758-10.807 4.758z"
            ></path>
            <path
              id="Vector_4"
              fill="#3F3D56"
              d="M645 397.069l-486.394-.956 56.372-100.82.269-.478V72.619c0-2.697.5-5.367 1.471-7.86a20.67 20.67 0 014.188-6.662 19.285 19.285 0 016.268-4.452 18.331 18.331 0 017.394-1.563h331.773c2.537 0 5.05.531 7.394 1.563a19.285 19.285 0 016.268 4.452 20.67 20.67 0 014.188 6.663 21.665 21.665 0 011.471 7.86v223.724L645 397.069z"
            ></path>
            <path
              id="Vector_5"
              fill="#fff"
              d="M234.128 66.417c-1.669.002-3.268.707-4.448 1.962-1.18 1.254-1.844 2.954-1.846 4.727v202.596c.002 1.774.666 3.474 1.846 4.728 1.18 1.254 2.779 1.96 4.448 1.962h335.351c1.668-.002 3.268-.708 4.448-1.962 1.179-1.254 1.843-2.954 1.845-4.728V73.106c-.002-1.773-.666-3.473-1.845-4.727-1.18-1.255-2.78-1.96-4.448-1.962H234.128z"
            ></path>
            <path
              id="Vector_6"
              fill="#2F2E41"
              d="M235.533 309.15a2.585 2.585 0 00-1.454.454c-.435.295-.78.717-.996 1.214l-17.37 40.137a3.031 3.031 0 00.179 2.745c.244.405.58.738.977.969.396.23.841.351 1.294.351h365.276c.46 0 .912-.125 1.314-.363.401-.238.739-.581.981-.996a3.014 3.014 0 00.117-2.79l-18.88-40.137a2.8 2.8 0 00-.993-1.158 2.563 2.563 0 00-1.419-.426H235.533z"
            ></path>
            <path
              id="Vector_7"
              fill="#fff"
              d="M400.455 63.072c2.234 0 4.046-1.925 4.046-4.3s-1.812-4.3-4.046-4.3c-2.235 0-4.046 1.925-4.046 4.3s1.811 4.3 4.046 4.3z"
            ></path>
            <path
              id="Vector_8"
              fill="#2F2E41"
              d="M364.551 362.666c-.593 0-1.169.208-1.64.592-.47.383-.809.92-.964 1.529l-4.357 17.201a3.043 3.043 0 00-.042 1.302c.08.432.253.838.505 1.188.252.349.576.632.947.827.371.195.78.296 1.194.296h82.861c.43 0 .854-.109 1.236-.319.382-.209.711-.513.961-.885.249-.373.411-.803.472-1.255.061-.453.02-.914-.121-1.346l-5.602-17.201a2.859 2.859 0 00-.984-1.398 2.595 2.595 0 00-1.565-.531h-72.901z"
            ></path>
            <path
              id="Vector_9"
              fill="#2F2E41"
              d="M585.662 291.47v3.823H214.978l.279-.478v-3.345h370.405z"
            ></path>
            <path
              id="background_log"
              fill="#F9A826"
              d="M575.323 133.79c34.757 0 62.934-29.95 62.934-66.895C638.257 29.95 610.08 0 575.323 0c-34.758 0-62.935 29.95-62.935 66.895 0 36.945 28.177 66.895 62.935 66.895z"
            ></path>
            <path
              id="Vector_10"
              fill="#fff"
              d="M601.395 96.042H549.25a3.495 3.495 0 01-2.542-1.12 3.95 3.95 0 01-1.055-2.703V58.772a3.953 3.953 0 011.055-2.702 3.495 3.495 0 012.542-1.12h52.145a3.495 3.495 0 012.542 1.12 3.953 3.953 0 011.055 2.702v33.447a3.954 3.954 0 01-1.055 2.702 3.495 3.495 0 01-2.542 1.12zm-52.145-37.27v33.447h52.148l-.003-33.447H549.25z"
            ></path>
            <path
              id="Vector_11"
              fill="#fff"
              d="M591.506 58.772h-32.367v-15.29c0-11.075 6.807-19.113 16.184-19.113s16.183 8.038 16.183 19.113v15.29zm-28.77-3.823h25.173V43.482c0-9.003-5.175-15.29-12.586-15.29-7.411 0-12.587 6.287-12.587 15.29v11.467z"
            ></path>
            <path
              id="Vector_12"
              fill="#fff"
              d="M575.323 78.362c1.986 0 3.596-1.711 3.596-3.822 0-2.111-1.61-3.823-3.596-3.823-1.987 0-3.597 1.712-3.597 3.823 0 2.111 1.61 3.822 3.597 3.822z"
            ></path>
            <path
              id="Vector_13"
              fill="#E6E6E6"
              d="M531.389 213.673H272.218c-1.273-.001-2.493-.539-3.392-1.496-.9-.956-1.406-2.253-1.408-3.605v-68.335a5.278 5.278 0 011.408-3.606c.899-.956 2.119-1.494 3.392-1.496h259.171c1.272.002 2.492.54 3.392 1.496a5.272 5.272 0 011.407 3.606v68.335a5.27 5.27 0 01-1.407 3.605c-.9.957-2.12 1.495-3.392 1.496zm-259.171-76.497a2.8 2.8 0 00-2.036.898 3.161 3.161 0 00-.844 2.163v68.335c.001.811.304 1.59.844 2.163a2.8 2.8 0 002.036.898h259.171a2.8 2.8 0 002.035-.898c.54-.573.844-1.352.844-2.163v-68.335c0-.812-.304-1.59-.844-2.163a2.8 2.8 0 00-2.035-.898H272.218z"
            ></path>
            <path
              id="screen_dot"
              fill="#E6E6E6"
              d="M312.488 192.563c10.797 0 19.55-9.304 19.55-20.781 0-11.476-8.753-20.78-19.55-20.78-10.798 0-19.551 9.304-19.551 20.78 0 11.477 8.753 20.781 19.551 20.781z"
            ></path>
            <path
              id="screen_top"
              fill="#E6E6E6"
              d="M357.64 157.928c-.428 0-.853.089-1.249.263a3.24 3.24 0 00-1.058.75 3.495 3.495 0 00-.708 1.124 3.66 3.66 0 000 2.654c.164.42.405.802.708 1.124a3.24 3.24 0 001.058.75c.396.174.821.263 1.249.262h153.611c.864 0 1.693-.365 2.304-1.014.611-.65.954-1.531.954-2.449 0-.919-.343-1.8-.954-2.449a3.163 3.163 0 00-2.304-1.015H357.64z"
            ></path>
            <path
              id="screen_bottom"
              fill="#E6E6E6"
              d="M357.64 178.709c-.864 0-1.693.365-2.304 1.015a3.575 3.575 0 00-.954 2.449c0 .918.343 1.799.954 2.449a3.165 3.165 0 002.304 1.014h66.099c.864 0 1.693-.365 2.304-1.014.611-.65.954-1.531.954-2.449 0-.919-.343-1.8-.954-2.449a3.163 3.163 0 00-2.304-1.015H357.64z"
            ></path>
            <path
              id="Vector_14"
              fill="#FFB8B8"
              d="M214.34 180.11l-47.91 27.074-.606-22.561c15.637-2.775 30.515-7.606 44.271-15.471l5.011-13.159a8.887 8.887 0 012.575-3.651 8.154 8.154 0 013.937-1.82 7.936 7.936 0 014.268.488 8.433 8.433 0 013.483 2.668c1.352 1.749 2.027 3.978 1.89 6.237-.137 2.258-1.077 4.377-2.629 5.926l-14.29 14.269z"
            ></path>
            <path
              id="Vector_15"
              fill="#2F2E41"
              d="M97.277 336.425a10.614 10.614 0 01-.218-4.183 10.397 10.397 0 011.413-3.912l10.525-17.168c2.489-4.06 6.308-6.993 10.717-8.23 4.409-1.236 9.093-.688 13.143 1.539-4.423 8.003-3.807 15.023 1.527 21.124-8.28 4.297-15.933 9.843-22.722 16.466a9.084 9.084 0 01-4.151 1.663c-1.489.195-3 .009-4.407-.542a9.397 9.397 0 01-3.684-2.628 10.2 10.2 0 01-2.143-4.129z"
            ></path>
            <path
              id="Vector_16"
              fill="#2F2E41"
              d="M216.522 313.978c-1.593 2.821-3.841 5.16-6.528 6.792a17.248 17.248 0 01-8.821 2.527l-69.917.563-3.032-18.694 30.929-9.669-26.078-21.273 28.503-35.453 51.771 51.288c3.026 2.998 4.992 7.009 5.57 11.363.577 4.353-.269 8.786-2.397 12.556z"
            ></path>
            <path
              id="Vector_17"
              fill="#2F2E41"
              d="M120.34 441.825h-16.375C89.264 334.709 74.299 227.293 118.52 187.201l52.155 9.025-6.671 47.057-29.109 35.454-14.555 163.088z"
            ></path>
            <path
              id="Vector_18"
              fill="#2F2E41"
              d="M134.734 466.089a8.868 8.868 0 01-3.936.232 9.085 9.085 0 01-3.68-1.501l-17.779-2.54c-3.821-2.646-6.58-6.706-7.744-11.392-1.163-4.686-.647-9.665 1.448-13.97 7.529 4.701 14.133 4.046 19.873-1.625 4.055 8.704 10.737 8.173 17.119 15.506a10.413 10.413 0 011.565 4.412 10.614 10.614 0 01-.51 4.685 10.07 10.07 0 01-2.472 3.916 9.268 9.268 0 01-3.884 2.277z"
            ></path>
            <path
              id="Vector_19"
              fill="#FFB8B8"
              d="M159.153 115.649l-30.323-7.736c5.036-10.957 5.451-23.15 3.032-36.098l20.62-.645c.646 16.103 2.6 31.147 6.671 44.479z"
            ></path>
            <path
              id="Vector_20"
              fill="#F9A826"
              d="M167.487 215.635c-22.074 15.988-37.671.547-49.573-23.277 1.654-14.578-1.024-32.024-5.984-50.979-2.205-8.361-1.382-17.297 2.308-25.044 3.69-7.748 9.979-13.742 17.624-16.802l26.078 11.603c22.143 19.185 26.501 39.966 18.194 61.884l-8.647 42.615z"
            ></path>
            <path
              id="Vector_21"
              fill="#FFB8B8"
              d="M103.965 131.764l-24.258 13.537 43.059 27.074 5.991 15.708a8.8 8.8 0 01.572 3.304 8.759 8.759 0 01-.701 3.275 8.337 8.337 0 01-1.861 2.715 7.77 7.77 0 01-2.719 1.713 7.408 7.408 0 01-3.563.386 7.563 7.563 0 01-3.353-1.34 8.152 8.152 0 01-2.442-2.784 8.722 8.722 0 01-1.022-3.649l-.606-10.948-54.726-19.196a12.684 12.684 0 01-4.916-3.171 13.727 13.727 0 01-3.114-5.139 14.412 14.412 0 01-.139-8.782c.869-2.863 2.606-5.34 4.94-7.042l44.007-32.09 4.851 26.429z"
            ></path>
            <path
              id="Vector_22"
              fill="#F9A826"
              d="M128.224 134.343c-10.117-4.713-19.317.406-30.93 4.512l-1.819-34.165c11.531-6.532 22.524-8.293 32.749-3.223v32.876z"
            ></path>
            <path
              id="Vector_23"
              fill="#FFB8B8"
              d="M140.326 88.093c10.692 0 19.36-9.213 19.36-20.578s-8.668-20.578-19.36-20.578-19.36 9.213-19.36 20.578 8.668 20.578 19.36 20.578z"
            ></path>
            <path
              id="Vector_24"
              fill="#2F2E41"
              d="M163.487 64.918c-19.168 1.996-33.774-1.336-43.109-10.824v-7.64h41.482l1.627 18.464z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_159_2">
              <path fill="#fff" d="M0 0H645V477H0z"></path>
            </clipPath>
          </defs>
        </svg>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your username"
                {...register("username")}
              />
              <FaRegUserCircle className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400" />
            </div>
            <small className="font-montserrat ml-2">
              {errors.username && errors.username.message}
            </small>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your valid email"
                {...register("email")}
              />
              <MdOutlineMarkEmailRead className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400" />
            </div>
            <small className="font-montserrat ml-2">
              {errors.email && errors.email.message}
            </small>
          </div>

          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your password"
                type={type.password ? "password" : "text"}
                {...register("password")}
              />
              {type.password ? (
                <FaEye
                  onClick={() => setType({ ...type, password: !type.password })}
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() => setType({ ...type, password: !type.password })}
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              )}
            </div>
            <small className="font-montserrat ml-2">
              {errors.password && errors.password.message}
            </small>
          </div>

          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your confirm password"
                {...register("cpassword")}
                type={type.cpassword ? "password" : "text"}
              />
              {type.cpassword ? (
                <FaEye
                  onClick={() =>
                    setType({ ...type, cpassword: !type.cpassword })
                  }
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() =>
                    setType({ ...type, cpassword: !type.cpassword })
                  }
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              )}
            </div>
            <small className="font-montserrat ml-2">
              {errors.cpassword && errors.cpassword.message}
            </small>
          </div>

          <Button type="submit" name="register" />
          <p className="capitalize text-center font-montserrat text-gray-800">
            already have an account?
            <Link className="text-blue-500" to="/login">
              login
            </Link>
          </p>
        </Form>
      </div>
    </Layout>
  );
}
