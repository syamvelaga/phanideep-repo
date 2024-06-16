import React, { Component } from 'react';

class DarkModeToggle extends Component {
  render() {
    const { toggleDarkMode, darkMode } = this.props;

    return (
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    );
  }
}

export default DarkModeToggle;
