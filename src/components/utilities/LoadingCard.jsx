import React from "react";

export default function LoadingCard() {
  return (
    <div>
      <div className="bg-gray-200 w-[16rem] h-[16rem] rounded-md">
        <div className="bg-gray-400/70 w-4/5 mx-auto h-3/5 mt-8 relative top-3 animate-pulse"></div>
        <div className="flex justify-center space-x-7 mt-6">
          <div className="bg-gray-400/70 animate-pulse rounded-sm w-[35%] h-5"></div>
          <div className="bg-gray-400/70 animate-pulse rounded-sm w-[35%] h-5"></div>
        </div>
        <div className="flex justify-center animate-pulse rounded-sm space-x-7 mt-4">
          <div className="bg-gray-400/70 animate-pulse rounded-sm w-[35%] h-5"></div>
          <div className="bg-gray-400/70 animate-pulse rounded-sm w-[35%] h-5"></div>
        </div>
      </div>
    </div>
  );
}
