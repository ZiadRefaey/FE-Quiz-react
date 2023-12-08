import SelectChoice from "./SelectChoice";
import HTMLIcon from "./assets/icon-html.svg";
import CSSIcon from "./assets/icon-css.svg";
import AccessibilityIcon from "./assets/icon-accessibility.svg";
import JSIcon from "./assets/icon-js.svg";
import QuizIcon from "./QuizIcon";
import { useContext } from "react";
import { ThemeContext } from "./App";
export default function QuizIntro() {
  const darkTheme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-start xl:flex-row max-w-[1160px] xl:justify-between xl:items-start w-full">
        <div className="w-full max-w-[564px]">
          <h1
            className={`text-${
              darkTheme ? "white" : "darkNavy"
            } max-w-[18.5rem] text-custom-40 md:text-custom-64 font-light mb-2 leading-tightest md:max-w-[30rem] md:mb-4 xl:mb-12 transition-all duration-300`}
          >
            Welcome to the <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p
            className={`italic text-custom-14 md:text-custom-20 ${
              darkTheme ? "text-lightBlue" : "text-grayNavy"
            } mb-10 transition-all duration-300`}
          >
            Pick a subject to get started.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 w-full max-w-[564px]">
          <SelectChoice content={"HTML"}>
            <QuizIcon src={HTMLIcon} bgColor={"#FFF1E9"} />
          </SelectChoice>

          <SelectChoice content={"CSS"}>
            <QuizIcon src={CSSIcon} bgColor={"#E0FDEF"} />
          </SelectChoice>

          <SelectChoice content={"JS"}>
            <QuizIcon src={JSIcon} bgColor={"#EBF0FF"} />
          </SelectChoice>

          <SelectChoice content={"Accessability"}>
            <QuizIcon src={AccessibilityIcon} bgColor={"#F6E7FF"} />
          </SelectChoice>
        </div>
      </div>
    </>
  );
}
