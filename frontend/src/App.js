import {Routes, Route} from 'react-router-dom';
import PatternProPage from "./pages/PatternProPage.js";
import QuizPage from "./pages/Questions.js";
import EndQuiz from './pages/EndQuiz.js';
import Leaderboard from './pages/Leaderboard.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PatternProPage/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>
      <Route path="/finish" element = {<EndQuiz/>}/>
      <Route path="/leaderboard" element = {<Leaderboard/>}/>
    </Routes>
  );
}

export default App;
