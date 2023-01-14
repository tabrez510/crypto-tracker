import React from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

function Footer() {
  return (
    <div className="footer">
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoTracker.</h2>
      </a>

      <div className="socials-flex">
        <a href="https://wa.me/918507442112">
          <WhatsAppIcon className="socials-icon" />
        </a>
        <a href="https://www.instagram.com/tabrez_510/">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto:alamtabrez510@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made by Tabrez using React JS",
            url: "https://crypto-dashboard-tabrez510.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
}

export default Footer;