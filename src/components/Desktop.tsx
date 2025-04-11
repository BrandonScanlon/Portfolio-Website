import React, { useState, useEffect } from 'react';
import './Desktop.css';
import ProjectFile from '../models/ProjectFile';
import WelcomePopup from './WelcomePopup';

interface DesktopProps {
  projects: ProjectFile[];
  onOpenFile: (file: ProjectFile) => void;
}

const startProject: ProjectFile[] = [
    {
      id: 'start',
      title: 'Start',
      icon: './icons/folder.png',
      type: 'folder',
      files: [
        {
          id: 'start1',
          title: 'Welcome',
          icon: './icons/document.png',
          type: 'document',
          content: {
            description: "Hi there, welcome to my portfolio! I'm a Software Engineer with a passion for creating innovative solutions. I graduated with my Bachelor\'s of Science in Computer Science from Worcester Polytechnic Institute (WPI). Feel free to explore my projects and reach out if you have any questions. To get started, think of this as a traditional Windows Desktop interface. You can click on any folder to open it and browse my experience!",
            technologies: ["Senior Software Engineer", "Full Stack Engineer", "bdscanlon11@gmail.com"],
            image: "./icons/white.png",
          }
        },
    ]
    },
];

const Desktop: React.FC<DesktopProps> = ({ projects, onOpenFile }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [closeWelcome, setCloseWelcome] = useState<boolean>(false);

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

  useEffect(() => {
    if (closeWelcome) {
      setShowWelcome(false);
    }
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    setCloseWelcome(true);
  };

  return (
    <div className="desktop">
        <div className="recycle-bin">
      <img src="./icons/recycle-bin.png" alt="Recycle Bin" />
      <span>Recycle Bin</span>
    </div>
        {showWelcome && <WelcomePopup onClose={handleCloseWelcome} />}
      <div className="taskbar">
        <div className="start-button" onClick={() => onOpenFile(startProject[0])}>Start</div>
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