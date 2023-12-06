import QuizContent from "./QuizContent";
import QuizIntro from "./QuizIntro";
import Results from "./Results";
export default function MainContent() {
  return (
    <main className="pt-8 w-full relative z-10 xl:pt-[100px]">
      {/* <QuizIntro /> */}
      {/* <QuizContent /> */}
      <Results />
    </main>
  );
}
