import React from "react";
import AccessibilityIcon from "./assets/icon-accessibility.svg";
import QuizIcon from "./QuizIcon";
import Button from "./Button";
export default function Results() {
  return (
    <>
      <div className="xl:flex xl:justify-between max-w-[1160px] xl:items-start">
        <h4 className="font-light text-custom-40 md:text-custom-64 text-darkNavy mb-10 md:mb-16 max-w-[450px] leading-tight">
          Quiz completed <span className="font-medium ">You scored...</span>
        </h4>
        <div className="w-full max-w-[564px]">
          <div className="w-full rounded-xl bg-white p-8 gap-4 flex items-center  justify-center flex-col mb-3 md:p-12 md:mb-8 custom-shadow">
            <div className="flex gap-4 items-center justify-center">
              <QuizIcon src={AccessibilityIcon} bgColor={"lightPurple"} />
              <p className="font-medium text-custom-18 md:text-custom-28 text-darkNavy">
                Accessability
              </p>
            </div>
            <strong className="text-darkNavy text-custom-88 font-medium leading-tightest md:text-custom-144">
              8
            </strong>
            <p className="text-custom-18 text-grayNavy md:text-custom-24">
              out of 10
            </p>
          </div>
          <Button>Play Again</Button>
        </div>
      </div>
    </>
  );
}
