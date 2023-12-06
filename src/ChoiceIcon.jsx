import React from "react";

export default function ChoiceIcon({ children }) {
  return (
    <div className="px-3 py-1 rounded-md bg-lightGray group-hover:bg-purple transition-all duration">
      <p className="text-custom-18 uppercase font-medium text-grayNavy group-hover:text-white transition-all duration md:text-custom-28">
        {children}
      </p>
    </div>
  );
}
