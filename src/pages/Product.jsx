import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../app/feature/getProductSlice";
import Card from "../components/utilities/Card";
import CatLinks from "../components/utilities/CatLinks";
import FilterAreaDesktop from "../components/utilities/FilterAreaDesktop";
import FilterAria from "../components/utilities/FilterAria";
import FilterMobileDevice from "../components/utilities/FilterMobileDevice";
import Layout from "../components/utilities/Layout";
import LineCard from "../components/utilities/LineCard";
import LoadingCard from "../components/utilities/LoadingCard";
import NoFound from "../components/utilities/NoFound";
import SidebarLinks from "../components/utilities/SidebarLInks";

export default function Product() {
  const { catToggle, filterToggle, layoutToggle } = useSelector(
    (state) => state.toggler
  );
  const dispatch = useDispatch();
  const { filterProduct: products, loading } = useSelector(
    (state) => state.productList
  );
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(8);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-[2fr_minmax(300px,5fr)] gap-x-8">
        <SidebarLinks />

        <div>
          <div className=" sticky border-b top-[8.5rem] md:top-[9.5rem]  bg-white pb-3 pt-5 px-2 z-[9]">
            <FilterAreaDesktop />
            <FilterAria />
            {catToggle && <CatLinks />}
            {filterToggle && <FilterMobileDevice />}
          </div>
          {!loading && currentItems.length <= 0 && <NoFound />}
          {layoutToggle ? (
            <div className="min-h-[55vh]">
              <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {loading
                  ? [1, 2, 3, 4, 5].map((ele, id) => <LoadingCard key={id} />)
                  : currentItems.map((product) => (
                      <Card key={product._id} product={product} />
                    ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-[55vh]">
              {currentItems &&
                currentItems.map((product) => (
                  <LineCard key={product._id} product={product} />
                ))}
            </div>
          )}

          <ReactPaginate
            className="flex space-x-5 font-bold ml-auto w-fit"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </Layout>
  );
}
