import "./App.css";
import HomePage from "./HomePage";
import { getQuiz } from "./services/apiQuiz";
function App() {
  getQuiz();
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
