import "./App.css";
import { createContext, useContext } from "react";
import MainContent from "./MainContent";
import Navbar from "./navbar";
import bgPatternMobileLight from "./assets/pattern-background-mobile-light.svg";
// import bgPatternMobileDark from './assets/pattern-background-mobile-dark'
// import bgPatternTabletLight from './assets/pattern-background-tablet-light'
// import bgPatternTabletDark from './assets/pattern-background-tablet-dark'
// import bgPatternDesktopLight from './assets/pattern-background-desktop-light'
// import bgPatternDesktopDark from './assets/pattern-background-desktop-dark'
import { getQuiz } from "./services/apiQuiz";
import { useReducer } from "react";
const initialState = {
  status: "loading",
  index: 0,
  userAnswer: null,
  score: 0,
  quiz: null,
  questions: [],
};
function reducer(state, action) {}
function App() {
  const TestContext = createContext(null);
  const [{ status, index, userAnswer, score, quiz, questions }, dispatch] =
    useReducer(reducer, initialState);
  getQuiz();
  return (
    <TestContext.Provider value={dispatch}>
      <div className="h-[100vh] bg-lightGray relative px-6 md:px-16">
        <img
          src={bgPatternMobileLight}
          className="absolute right-0 -bottom-0 w-full h-full z-5"
        />
        <Navbar />
        <MainContent />
      </div>
    </TestContext.Provider>
  );
}

export default App;
