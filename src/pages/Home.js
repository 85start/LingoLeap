import React from "react";
import { Link, useNavigate} from "react-router-dom";
import './Home.css'

function Home() {
   const navigate = useNavigate(); // Initialize useNavigate

return(
   <div>
      <div className="home-links">
         <div class="rectangle"></div>
         <span>
            <Link to="/lessons"> Lessons </Link>
            <Link to="/review"> Review </Link>
            <Link to="/interviewprep"> Interview Prep </Link>
            <Link to="/community"> Community </Link>
         </span>
         <div class="startButton" onClick={() => { navigate("/lessons"); }}> Get Started </div>
         <div class="circle"></div>
      </div> 
   </div>
   );
}

export default Home; 