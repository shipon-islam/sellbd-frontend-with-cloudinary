import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../app/services/paymentApi";
import Layout from "../components/utilities/Layout";
import WraperSideLinks from "../components/utilities/WraperSideLinks";

export default function ViewOrder() {
  const { _id } = useParams();
  const{isLoading,data:order}=useGetOrderByIdQuery(_id)
  

 

  if (isLoading) {
    return <div className="min-h-[60vh] grid place-items-center">
      <h1 className="font-bold">Just a second..</h1>
    </div>;
  }

  return (
    <Layout>
      <WraperSideLinks page="view order list">
        <div className="max-w-[850px]">
          <div className="flex items-center justify-between font-montserrat my-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                #Order Id :{order?.orderId}
              </h3>
              <p className="ml-2">Order Date : {order?.date}</p>
            </div>
            <div className="border-2 w-fit px-4 py-2 bg-orange-200 font-bold text-gray-700 capitalize">
              {order?.status}
            </div>
          </div>
          <div className="font-montserrat">
            <h3 className="font-bold text-gray-700 text-lg">
              About Your Order
            </h3>
            <hr />
            <p className="font-medium text-md text-gray-600 capitalize font-poppins py-3">
              Dear valuable customer, we are Inform You that, we're accept your
              partcular order.stay with us.Thank You. - shipon islam
            </p>
          </div>

          <div className="mt-8">
            <div className="font-bold text-gray-700 text-lg my-2">
              Ordered items
            </div>
            <table className="table-auto w-full font-montserrat border-2 rounded-lg">
              <thead>
                <tr className="bg-orange-300/30 text-left text-gray-700 ">
                  <th className="px-3 py-4 ">Product name</th>

                  <th className="px-3 py-4">Price</th>
                  <th className="px-3 py-4 ">Qty</th>

                  <th className="px-3 py-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-md text-gray-700 capitalize">
                  <td className="w-[25rem] px-4 py-6">
                    {order && order.productList.map((ele) => `${ele.name} ,`)}
                  </td>
                  <td className=" px-4">
                    {order?.totalAmount - order?.deliveryCharge}
                    <TbCurrencyTaka className="inline-block text-xl mb-1" />
                  </td>
                  <td className=" px-4">{order?.quantity}</td>
                  <td className=" px-4">
                    {order?.totalAmount}
                    <TbCurrencyTaka className="inline-block text-xl mb-1" />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    className="bg-orange-300/30 h-16 rounded-b-lg py-3 pr-3"
                  >
                    <div className="flex gap-x-4 justify-end">
                      <div>Subtotal</div>
                      <div>
                        {order?.totalAmount - order?.deliveryCharge}
                        <TbCurrencyTaka className="inline-block text-xl mb-1" />
                      </div>
                    </div>
                    <div className="flex gap-x-4 justify-end">
                      <div>Delivery Charge</div>
                      <div>
                        {order?.deliveryCharge}
                        <TbCurrencyTaka className="inline-block text-xl mb-1" />
                      </div>
                    </div>
                    <div className="flex gap-x-4 justify-end">
                      <div>Total Amount</div>
                      <div>
                        {order?.totalAmount}
                        <TbCurrencyTaka className="inline-block text-xl mb-1" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </WraperSideLinks>
    </Layout>
  );
}
