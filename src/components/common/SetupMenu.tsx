import "./SetupMenu.css";
import React from "react";
import { Text } from "./Text";

interface SetupMenuProps {
  onReady: () => void;
}

export const SetupMenu = ({ onReady }: SetupMenuProps) => (
  <div className="menu">
    <button onClick={onReady}>{Text("ready")}</button>
  </div>
);
