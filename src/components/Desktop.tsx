import React, { useState, useEffect } from 'react';
import './Desktop.css';
import ProjectFile from '../models/ProjectFile';

interface DesktopProps {
  projects: ProjectFile[];
  onOpenFile: (file: ProjectFile) => void;
}

const Desktop: React.FC<DesktopProps> = ({ projects, onOpenFile }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };

    // Update immediately and then every second
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="desktop">
      <div className="taskbar">
        <div className="start-button">Start</div>
        <div className="system-tray">
          <div className="clock">{currentTime}</div>
        </div>
      </div>
      
      <div className="icons-container">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="desktop-icon"
            onClick={() => onOpenFile(project)}
            onDoubleClick={() => onOpenFile(project)}
          >
            <img src={project.icon} alt={project.title} />
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;