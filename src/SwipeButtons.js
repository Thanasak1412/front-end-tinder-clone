import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SwipeButton() {
  return (
    <div className="swipe-button">
      <IconButton className="swipe-button-replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button-clear">
        <ClearIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button-star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button-favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button-flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
