import SelectChoice from "./SelectChoice";
import HTMLIcon from "./assets/icon-html.svg";
import CSSIcon from "./assets/icon-css.svg";
import AccessibilityIcon from "./assets/icon-accessibility.svg";
import JSIcon from "./assets/icon-js.svg";
import QuizIcon from "./QuizIcon";
export default function QuizIntro() {
  return (
    <>
      <h1 className="text-darkNavy max-w-[18.5rem] text-custom-40 font-light mb-2 leading-tight">
        Welcome to the <span className="font-bold">Frontend Quiz!</span>
      </h1>
      <p className="italic text-custom-14 text-grayNavy mb-10">
        Pick a subject to get started.
      </p>
      <div className="flex flex-col gap-3">
        <SelectChoice content={"HTML"}>
          <QuizIcon bgColor={"lightOrange"} src={HTMLIcon} />
        </SelectChoice>

        <SelectChoice content={"CSS"}>
          <QuizIcon src={CSSIcon} bgColor={"lightGreen"} />
        </SelectChoice>

        <SelectChoice content={"JS"}>
          <QuizIcon src={JSIcon} bgColor={"lightSky"} />
        </SelectChoice>

        <SelectChoice content={"Accessability"}>
          <QuizIcon src={AccessibilityIcon} bgColor={"lightPurple"} />
        </SelectChoice>
      </div>
    </>
  );
}
