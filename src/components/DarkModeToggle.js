import React from "react";

const DarkModeToggle = ({ toggleMode, isDarkMode }) => {
  return (
    <div className="toggle-mode" onClick={toggleMode}>
      {isDarkMode ? "\u{2600} Dark Mode" : "\u{1F319} Light Mode"}
    </div>
  );
};

export default DarkModeToggle;
