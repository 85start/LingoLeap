import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Community from './pages/Community'; 
import InterviewPrep from './pages/InterviewPrep'; 
import Lessons from './pages/Lessons'; 
import Review from './pages/Review'; 
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <span>
          <Link to="/"> Home </Link>
          <Link to="/community"> Community </Link>
          <Link to="/interviewprep"> InterviewPrep </Link>
          <Link to="/lessons"> Lessons </Link>
          <Link to="/review"> Review </Link>
        </span>
      </nav>

        <Routes> 
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/community" element = {<Community />}></Route> 
          <Route path = "/interviewprep" element = {<InterviewPrep />}></Route>
          <Route path = "/lessons" element = {<Lessons />}></Route>
          <Route path = "/review" element = {<Review />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
