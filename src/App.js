import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Instructions from './components/quiz/Instructions';
import Quiz from './components/quiz/Quiz';

function App() {
    return (
 <Router>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/play/instructions' element={<Instructions/>}/>
   <Route path='/play/Quiz' element={<Quiz/>}/>
   </Routes>
   </Router>
    );
}

export default App;




