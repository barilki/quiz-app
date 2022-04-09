import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Instructions from './components/quiz/Instructions';
import Quiz from './components/quiz/Quiz';

const routes = {
  "home-page":'/'
}

function App() {
    return (
 <Router>
   <Routes>
   <Route path={routes['home-page']} element={<Home/>}/>
   <Route path='/play/instructions' element={<Instructions/>}/>
   <Route path='/play/quiz' element={<Quiz/>}/>
   </Routes>
   </Router>
    );
}

export default App;




