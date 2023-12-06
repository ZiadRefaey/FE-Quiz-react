import React from "react";

export default function QuizQuestion() {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-11 xl:gap-[156px] max-w-[465px]">
        <div>
          <h2 className="italic text-grayNavy text-custom-14 md:text-custom-20 mb-3 md:mb-7">
            Question 6 of 10
          </h2>
          <h3 className="text-custom-20 text-darkNavy  font-semibold leading-tight md:text-custom-36">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </h3>
        </div>
        <progress
          value={4}
          max={10}
          className="progress w-full h-4 "
        ></progress>
      </div>
    </>
  );
}
