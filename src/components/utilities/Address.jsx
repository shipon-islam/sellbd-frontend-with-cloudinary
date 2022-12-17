import React from "react";

export default function Address({ icon, title, name1, name2 }) {
  const ReactIcon = icon;
  return (
    <div className="w-fit font-montserrat">
      <span className="bg-orange-400 p-4 mx-auto block w-fit rounded-full ">
        <ReactIcon className="text-2xl text-white" />
      </span>
      <h3 className="uppercase text-center border-b-2 mt-2 text-gray-600 font-bold w-fit mx-auto px-4">
        {title}
      </h3>
      <div className="ml-2 text-md capitalize font-medium text-gray-600">
        {name1}
        <br />
        {name2}
      </div>
    </div>
  );
}
