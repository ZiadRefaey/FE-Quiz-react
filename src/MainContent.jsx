import QuizContent from "./QuizContent";
import QuizIntro from "./QuizIntro";
import Results from "./Results";
import { Bars } from "react-loader-spinner";

export default function MainContent({ quizState }) {
  return (
    <main className="pt-8 w-full relative z-10 xl:pt-[100px] flex items-center justify-between flex-col xl:justify-between">
      {quizState.status === "loading" && (
        <div className="w-full h-[70vh] flex items-center justify-center ">
          <Bars
            height="180"
            width="180"
            color="#A729F5"
            ariaLabel="bars-loading"
          />
        </div>
      )}
      {quizState.status === "idle" && <QuizIntro />}
      {quizState.status === "active" && <QuizContent quizState={quizState} />}
      {quizState.status === "finished" && <Results quizState={quizState} />}
    </main>
  );
}
