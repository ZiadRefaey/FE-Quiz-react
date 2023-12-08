import { useContext } from "react";
import { DispatchContext } from "./App";
import { getQuiz } from "./services/apiQuiz";
import correctIcon from "./assets/icon-correct.svg";
import falseIcon from "./assets/icon-error.svg";
import React from "react";
import { ThemeContext } from "./App";
export default function SelectChoice({
  children,
  content,
  selectedOption,
  quizState,
}) {
  const darkTheme = useContext(ThemeContext);
  const dispatch = useContext(DispatchContext);

  const disabled =
    children.type.name === "ChoiceIcon" && quizState?.correctAnswer !== null;
  const correctChoice =
    quizState?.questions[quizState?.index].answer === content;

  async function fetchData() {
    const APIData = await getQuiz(dispatch, content);
    dispatch({
      type: "startQuiz",
      payload: {
        selectedSubject: content.toLowerCase(),
        questions: APIData.data.questions,
      },
    });
  }

  function selectAnswer() {
    dispatch({ type: "pickAnswer", payload: content });
  }
  return (
    <button
      disabled={disabled}
      onClick={() => {
        children.type.name === "QuizIcon" && fetchData();
        children.type.name === "ChoiceIcon" && selectAnswer();
      }}
      className={`group flex items-center justify-between ${
        darkTheme ? "bg-navy" : "bg-white"
      } p-3  md:p-3 rounded-xl ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } border-4 ${
        children.type.name === "QuizIcon" && "hover:border-purple"
      } ${
        selectedOption && disabled && correctChoice
          ? "border-green"
          : selectedOption && disabled && !correctChoice
          ? "border-red"
          : selectedOption
          ? "border-purple"
          : darkTheme
          ? "border-navy"
          : "border-white"
      } transition-all duration-300 md:text-custom-28 custom-shadow`}
    >
      <div className="flex gap-4 md:gap-8 items-center justify-center">
        {React.cloneElement(children, {
          disabled: disabled,
          correctChoice: correctChoice,
        })}
        <p
          className={`font-medium text-custom-18 md:text-custom-28 ${
            darkTheme ? "text-white" : "text-darkNavy"
          } transition-all duration-300`}
        >
          {content}
        </p>
      </div>
      {quizState?.correctAnswer !== null && correctChoice ? (
        <img src={correctIcon} alt="check mark" />
      ) : quizState?.correctAnswer === false && selectedOption ? (
        <img src={falseIcon} alt="false mark" />
      ) : null}
    </button>
  );
}
