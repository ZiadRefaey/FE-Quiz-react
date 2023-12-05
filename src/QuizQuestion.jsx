import React from "react";

export default function QuizQuestion() {
  return (
    <>
      <h2 className="italic text-grayNavy text-custom-14 mb-3">
        Question 6 of 10
      </h2>
      <h3 className="text-custom-20 text-darkNavy mb-6 font-semibold leading-tight">
        Which of these color contrast ratios defines the minimum WCAG 2.1 Level
        AA requirement for normal text?
      </h3>
      <progress value={4} max={10} className="progress w-full h-4 "></progress>
    </>
  );
}
