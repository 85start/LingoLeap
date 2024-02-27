
import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from './Home'; 
import Community from './Community'; 
import InterviewPrep from './InterviewPrep'; 
import Lessons from './Lessons'; 
import Review from './Review'; 

function App() {
  return (
    <div className="App">
      {/* <div className = "container">  */}
      <Router>
      <Routes> 
      <Route path = "/Home" element = {<Home/>}/> 
      <Route path = "/Community" element = {<Community/>}/> 
      <Route path = "/InterviewPrep" element = {<InterviewPrep/>}/>
      <Route path = "/Lessons" element = {<Lessons/>}/>
      <Route path = "/Review" element = {<Review/>}/>
      </Routes>
      </Router>
      
      {/* </div> */}
     

    </div>
  );
}

export default App;
