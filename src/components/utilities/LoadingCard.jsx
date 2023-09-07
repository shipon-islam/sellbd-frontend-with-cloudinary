import React from "react";

export default function LoadingCard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    
      fill="none"
      className="w-full mt-4"
      viewBox="0 0 612 650"
    >
      <path fill="#1E1E1E" d="M0 0H612V650H0z"></path>
      <path
        fill="#fff"
        d="M0 0H1018V868H0z"
        transform="translate(-181 -96)"
      ></path>
      <rect width="612" height="650" fill="#F8F8F8" rx="9"></rect>
      <rect
      className="animate-pulse"
        width="583"
        height="350"
        x="15"
        y="13"
        fill="#BBBEC5"
        rx="10"
      ></rect>
      <rect className="animate-pulse" width="581" height="79" x="17" y="389" fill="#BBBEC5" rx="8"></rect>
      <rect className="animate-pulse" width="283" height="49" x="17" y="504" fill="#BBBEC5" rx="8"></rect>
      <rect
      className="animate-pulse"
        width="283"
        height="49"
        x="320"
        y="568"
        fill="#BBBEC5"
        rx="8"
      ></rect>
      <rect
      className="animate-pulse"
        width="225"
        height="49"
        x="378"
        y="504"
        fill="#BBBEC5"
        rx="9"
      ></rect>
      <rect className="animate-pulse" width="225" height="49" x="15" y="568" fill="#BBBEC5" rx="9"></rect>
    </svg>

  );
}

