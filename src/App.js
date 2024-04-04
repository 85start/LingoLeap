import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Community from './pages/Community'; 
import InterviewPrep from './pages/InterviewPrep'; 
import Lessons from './pages/Lessons'; 
import Review from './pages/Review'; 
import './App.css';
import './fonts.css';
import kangaroo from './images/kangaroo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav">
            <span>
                <Link to="/"> LingoLeap </Link>
                <Link to="/">
                  <img src={kangaroo} alt="LingoLeap Mascot" style={{ width: '90px' }} />
                </Link>
            </span>
          </div>
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

