import React from 'react';
import './MobileWarning.css';

const MobileWarning = () => {
  return (
    <div className="mobile-warning-overlay">
      <div className="mobile-warning-content">
        <h2>🖥️ Desktop Experience Required</h2>
        <p>This portfolio is designed for desktop browsers to showcase interactive elements.</p>
        <p>Please visit from a computer. Thank you!</p>
        <div className="mobile-icon">📱→💻</div>
      </div>
    </div>
  );
};

export default MobileWarning;