import "./PlayMenu.css";
import React from "react";

interface PlayMenuProps {
  onSettingsClick: () => void;
}

export const PlayMenu = ({ onSettingsClick }: PlayMenuProps) => (
  <div className="play_menu">
    <button className="play_menu__button" onClick={onSettingsClick}>
      ⚙
    </button>
  </div>
);
