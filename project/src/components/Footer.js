import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
            <p>
                &copy; 2023 Emocare.com
            </p>
    </div>
  )
}

export default Footer