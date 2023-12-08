import QuizOptions from "./QuizOptions";
import QuizQuestion from "./QuizQuestion";
export default function QuizContent({ quizState }) {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-start xl:justify-between xl:items-center w-full max-w-[1160px]">
        <QuizQuestion quizState={quizState} />
        <QuizOptions quizState={quizState} />
      </div>
    </>
  );
}
