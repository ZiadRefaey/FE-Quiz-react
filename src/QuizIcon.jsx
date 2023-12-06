import React from "react";

export default function QuizIcon({ bgColor, src }) {
  return (
    <div
      className={`w-10 h-10 p-[6px] rounded-md bg-contain md:w-14 md:h-14`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={src} className="w-full h-full"></img>
    </div>
  );
}
