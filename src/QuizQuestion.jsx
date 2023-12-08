import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./App";
export default function QuizQuestion({ quizState }) {
  const darkTheme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-11 xl:gap-[156px] xl:self-start w-full max-w-[564px] xl:max-w-[465px] mb-16">
        <div className="w-full ">
          <h2
            className={`italic ${
              darkTheme ? "text-lightBlue" : "text-grayNavy"
            } text-custom-14 md:text-custom-20 mb-3 md:mb-7 transition-all duration-300`}
          >
            Question {quizState.index + 1} of {quizState.questions.length}
          </h2>
          <h3
            className={`text-custom-20 ${
              darkTheme ? "text-white" : "text-darkNavy"
            } font-semibold leading-tight md:text-custom-36 transition-all duration-300`}
          >
            {quizState.questions[quizState.index].question}
          </h3>
        </div>
        <progress
          value={quizState.index + 1}
          max={quizState.questions.length}
          className="progress w-full h-4 "
        ></progress>
      </div>
    </>
  );
}
