import React from "react";

export default function ChoiceIcon({
  children,
  selectedOption,
  correctChoice,
  disabled,
}) {
  return (
    <div
      className={`px-3 py-1 rounded-md bg-lightGray group-hover:bg-lightPurple transition-all duration`}
      style={{
        backgroundColor:
          correctChoice && disabled && selectedOption
            ? "#26D782"
            : !correctChoice && disabled && selectedOption
            ? "#EE5454"
            : selectedOption
            ? "#A729F5"
            : "",
      }}
    >
      <p
        className="text-custom-18 uppercase font-medium text-grayNavy  transition-all duration md:text-custom-28"
        style={{ color: selectedOption ? "#fff" : "#626C7F" }}
      >
        {children}
      </p>
    </div>
  );
}
