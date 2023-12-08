import React, { useContext } from "react";
import HTMLIcon from "./assets/icon-html.svg";
import CSSIcon from "./assets/icon-css.svg";
import JSIcon from "./assets/icon-js.svg";
import AccessibilityIcon from "./assets/icon-accessibility.svg";
import QuizIcon from "./QuizIcon";
import Button from "./Button";
import { DispatchContext } from "./App";
import { ThemeContext } from "./App";
export default function Results({ quizState }) {
  const darkTheme = useContext(ThemeContext);
  let selectedSubjectIcon;
  let bgColor;
  switch (quizState?.selectedSubject) {
    case "html":
      selectedSubjectIcon = HTMLIcon;
      break;
    case "css":
      selectedSubjectIcon = CSSIcon;
      break;
    case "js":
      selectedSubjectIcon = JSIcon;
      break;
    case "accessability":
      selectedSubjectIcon = AccessibilityIcon;
      break;
  }
  switch (quizState?.selectedSubject) {
    case "html":
      bgColor = "#FFF1E9";
      break;
    case "css":
      bgColor = "#E0FDEF";
      break;
    case "js":
      bgColor = "#EBF0FF";
      break;
    case "accessability":
      bgColor = "#F6E7FF";
      break;
  }
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between w-full  max-w-[1160px] xl:items-start">
        <h4
          className={`font-light text-custom-40 md:text-custom-64 ${
            darkTheme ? "text-white" : "text-darkNavy"
          } mb-10 md:mb-16 max-w-[450px] leading-tight transition-all duration-300`}
        >
          Quiz completed <span className="font-medium ">You scored...</span>
        </h4>
        <div className="w-full max-w-[564px]">
          <div
            className={`w-full rounded-xl ${
              darkTheme ? "bg-navy" : "bg-white"
            } p-8 gap-4 flex items-center justify-center flex-col mb-3 md:p-12 md:mb-8 ${
              darkTheme ? " " : "custom-shadow"
            }`}
          >
            <div className="flex gap-4 items-center justify-center">
              <QuizIcon src={selectedSubjectIcon} bgColor={bgColor} />
              <p
                className={`font-medium text-custom-18 md:text-custom-28 ${
                  darkTheme ? "text-white" : "text-darkNavy"
                } duration-300 transition-all`}
              >
                {quizState.selectedSubject.toUpperCase()}
              </p>
            </div>
            <strong
              className={`${
                darkTheme ? "text-white" : "text-darkNavy"
              } text-custom-88 font-medium leading-tightest md:text-custom-144 transition-all duration-300`}
            >
              {quizState?.score}
            </strong>
            <p
              className={`text-custom-18 ${
                darkTheme ? "text-lightBlue" : "text-darkNavy"
              } md:text-custom-24 transition-all duration-300`}
            >
              out of {quizState?.questions.length}
            </p>
          </div>
          <Button onClick={() => dispatch({ type: "restartQuiz" })}>
            Play Again
          </Button>
        </div>
      </div>
    </>
  );
}
