import {Routes, Route} from 'react-router-dom';
import PatternProPage from "./pages/PatternProPage.js";
import QuizPage from "./pages/Questions.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PatternProPage/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>
    </Routes>
  );
}

export default App;
