import React from "react";

export default function Button({ children }) {
  return (
    <button className="w-full p-3 bg-purple rounded-xl text-white text-custom-18 font-medium hover:opacity-80 transition-all duration-150 active:bg-black md:p-5 md:text-custom-28">
      {children}
    </button>
  );
}
