import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home() { 
return(
   <div>
      <div className="home-links">
            <span>
              <Link to="/lessons"> Lessons </Link>
              <Link to="/review"> Review </Link>
              <Link to="/interviewprep"> Interview Prep </Link>
              <Link to="/community"> Community </Link>
            </span>
      </div> 
   </div>
   );
}

export default Home; 