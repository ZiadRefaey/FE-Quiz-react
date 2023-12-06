import QuizOptions from "./QuizOptions";
import QuizQuestion from "./QuizQuestion";
export default function QuizContent() {
  return (
    <>
      <div className="xl:flex xl:justify-between xl:items-start max-w-[1160px]">
        <QuizQuestion />
        <QuizOptions />
      </div>
    </>
  );
}
