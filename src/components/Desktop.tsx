import React, { useState, useEffect } from 'react';
import './Desktop.css';
import ProjectFile from '../models/ProjectFile';

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
            description: "Hi there, welcome to my portfolio! I'm a software developer with a passion for creating innovative solutions. Feel free to explore my projects and reach out if you have any questions. To get started, think of this as a traditional Windows Desktop interface. You can click on any folder to open",
            technologies: ["Senior Software Engineer", "Full Stack Engineer"],
            image: "./icons/white.png",
          }
        },
    ]
    },
];

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