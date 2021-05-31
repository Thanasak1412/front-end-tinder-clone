import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img
        className="header-logo"
        src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
        alt="tinder-logo"
      />
      <IconButton>
        <QuestionAnswerIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}

export default Header;
