import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../image/Emotions5.png"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >
          <h1> Emocare </h1>
          <p> Detect Your Emotion </p>
          <Link to="/menu">
          <button>Try it Now</button>
          </Link>
         
        </div>

    </div>
  )
}

export default Home