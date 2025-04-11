import React, { useEffect } from 'react';
import './WelcomePopup.css';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  useEffect(() => {
    // Add a short delay for better UX
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // Auto-close after 10 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="welcome-popup-overlay">
      <div className="welcome-popup">
        <h3>Welcome to My Portfolio!</h3>
        <p>Click the <span className="start-button-highlight">Start</span> button in the bottom-left corner to begin exploring.</p>
        <button onClick={onClose}>Got it!</button>
        
        <div className="popup-arrow-container">
          <div className="popup-arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;