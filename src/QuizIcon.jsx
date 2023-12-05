import React from "react";

export default function QuizIcon({ bgColor, src }) {
  return (
    <div className={`w-10 h-10 p-[6px] bg-${bgColor} rounded-md bg-contain`}>
      <img src={src} className="w-full h-full"></img>
    </div>
  );
}
