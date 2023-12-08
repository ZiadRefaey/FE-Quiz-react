import SwitchButton from "./SwitchButton";
import HTMLIcon from "./assets/icon-html.svg";
import CSSIcon from "./assets/icon-css.svg";
import JSIcon from "./assets/icon-js.svg";
import AccessibilityIcon from "./assets/icon-accessibility.svg";
import QuizIcon from "./QuizIcon";
import iconSunLight from "./assets/icon-sun-light.svg";
import iconMoonLight from "./assets/icon-moon-light.svg";
import iconSunDark from "./assets/icon-sun-dark.svg";
import iconMoonDark from "./assets/icon-moon-dark.svg";
export default function Navbar({ quizState, setDarkTheme, darkTheme }) {
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
  return (
    <header className="w-full py-4 relative z-10">
      <div className="flex items-center justify-between w-full max-w-[564px] xl:max-w-[1160px] m-auto">
        {quizState.selectedSubject ? (
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
        ) : (
          <div className="w-5"></div>
        )}

        <div className="flex gap-2 justify-between items-center">
          <img
            src={darkTheme ? iconSunLight : iconSunDark}
            className="w-[0.875rem] h-[0.875rem] md:w-[1.3125rem] md:h-[1.3125rem]"
          />
          <SwitchButton setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <img
            src={darkTheme ? iconMoonLight : iconMoonDark}
            className="w-[0.75rem] h-[0.75rem] md:w-[1.125rem] md:h-[1.125rem]"
          />
        </div>
      </div>
    </header>
  );
}
