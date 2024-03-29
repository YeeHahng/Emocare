import React, {useState} from 'react'
import Logo from "./image/images.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "./Navbar.css"

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className="hiddenLinks">
            <Link to="/home"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/home"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
           <button onClick={toggleNavbar}>
           <ReorderIcon />
           </button>          
        </div>
    </div>
  )
}

export default Navbar