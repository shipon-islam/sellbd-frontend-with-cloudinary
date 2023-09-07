import React, { useEffect, useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterSearch } from "../app/feature/getProductSlice";
import LineCard from "../components/utilities/LineCard";
import NoFound from "../components/utilities/NoFound";

export default function Search() {
  const products = useSelector((state) =>
    state.productList.searchProduct.slice(0, 5)
  );
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = ({ target }) => {
    dispatch(filterSearch(target.value));
  };
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleWindowClick(event) {
    if (event.target.closest(".navbar") === null) {
      navigate("/")
    }
  }
  return (
    <div className="min-h-[66vh]">
      <div className="min-h-screen w-full bg-gray-800/10 absolute top-0 z-[100]">
        <div onClick={handleWindowClick} className="absolute top-0 z-[100]   w-full mx-auto">
          <div className="navbar bg-white sm:w-2/5 lg:w-3/5 mx-auto px-4 sm:px-8 pt-10 min-h-screen">
            <div className="relative mb-8 sm:w-3/5 mx-auto">
              <input
                ref={inputRef}
                className="focus:outline-none
            border-2 w-full  bg-white border-gray-400 px-3 rounded-md py-2"
                type="search"
                onChange={handleSearch}
                placeholder="I'am looking for?"
              />

              <button className="bg-orange-300 absolute  right-[2.5px] rounded-r-[4px] h-[86%] top-[3px] px-3">
                <RiSearchLine className="text-gray-800 text-2xl cursor-pointer" />
              </button>
            </div>

            <div className="bg-gray-300/30 sm:pl-16 pl-2 rounded-md capitalize my-4 py-2 font-semibold font-montserrat text-gray-700">
              your search result {products?.length}
            </div>
            {products.length <= 0 ? (
              <NoFound />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-[55vh]">
                {products.map((product) => (
                  <LineCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
