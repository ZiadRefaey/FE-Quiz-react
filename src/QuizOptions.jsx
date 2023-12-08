import React, { useContext } from "react";
import SelectChoice from "./SelectChoice";
import ChoiceIcon from "./ChoiceIcon";
import Button from "./Button";
import { DispatchContext } from "./App";

export default function QuizOptions({ quizState }) {
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <div className="flex flex-col gap-3 w-full max-w-[564px]">
        {quizState.questions[quizState.index].options.map((option, index) => (
          <SelectChoice
            key={index}
            content={option}
            selectedOption={quizState.answer === option}
            quizState={quizState}
          >
            <ChoiceIcon selectedOption={quizState.answer === option}>
              {String.fromCharCode(65 + index)}
            </ChoiceIcon>
          </SelectChoice>
        ))}

        <Button
          onClick={() =>
            dispatch({
              type:
                quizState.correctAnswer !== null
                  ? "nextQuestion"
                  : "submitAnswer",
            })
          }
        >
          {quizState.correctAnswer !== null ? "Next Question" : "Submit Answer"}
        </Button>
      </div>
    </>
  );
}
