import './App.scss';
import SearchFilter from './Page/SearchFilter/components/SearchFilter';
import QuizApp from './Page/QuizApp/components/QuizApp';
import RegistrationForm from './Page/RegistrationForm/components/RegistrationForm';
import Homepage from './Page/Homepage/components/Homepage'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/searchfilter' element={<SearchFilter />} />
        <Route path='/quizapp' element={<QuizApp />}/>
        <Route path='/form' element={<RegistrationForm />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
