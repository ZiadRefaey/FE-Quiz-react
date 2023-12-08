import "./App.css";
import { createContext, useState } from "react";
import MainContent from "./MainContent";
import Navbar from "./navbar";
import BgPattern from "./BgPattern";
import { getQuiz } from "./services/apiQuiz";
import { useReducer } from "react";
export const DispatchContext = createContext(null);
export const ThemeContext = createContext(null);
const initialState = {
  status: "idle",
  index: null,
  correctAnswer: null,
  answer: null,
  score: 0,
  selectedSubject: null,
  questions: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        status: "loading",
      };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        index: state.index === null ? 0 : state.index++,
        selectedSubject: action.payload.selectedSubject,
        questions: action.payload.questions,
      };
    case "pickAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "submitAnswer":
      const correctAnswer =
        state.answer === state.questions[state.index].answer ? true : false;
      return {
        ...state,
        score: correctAnswer ? state.score++ : state.score,
        correctAnswer,
      };
    case "nextQuestion":
      return {
        ...state,
        status:
          state.index + 1 > state.questions.length ? "finished" : "active",
        correctAnswer: null,
        answer: null,
        index: state.index++,
      };
    case "restartQuiz":
      return {
        ...initialState,
      };
  }
}

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [quizState, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <DispatchContext.Provider value={dispatch}>
        <div
          className={`min-h-[100vh] ${
            darkTheme ? "bg-darkNavy" : "bg-lightGray"
          } relative px-6 md:px-16 transition-all duration-300`}
        >
          <BgPattern darkTheme={darkTheme} />
          <Navbar
            quizState={quizState}
            setDarkTheme={setDarkTheme}
            darkTheme={darkTheme}
          />
          <MainContent quizState={quizState} />
        </div>
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
