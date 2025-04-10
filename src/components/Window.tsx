import React, { useState } from 'react';
import './Window.css';
import ProjectFile from '../models/ProjectFile';

interface WindowProps {
  file: ProjectFile;
  onClose: () => void;
  onOpenFile: (file: ProjectFile) => void;
}

const Window: React.FC<WindowProps> = ({ file, onClose, onOpenFile }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <div className="window-title">
          <img src={file.icon} alt="" className="window-icon" />
          {file.title}
        </div>
        <button className="window-close" onClick={onClose}>✕</button>
      </div>
      
      <div className="window-content">
        {file.type === 'application' || file.type === 'document' ? (
          <div className="project-view">
            <img src={file.content?.image} alt={file.title} className="project-screenshot" />
            <h4 style={{textAlign: "center"}}>{file.content?.description}</h4>
            <div className="tech-stack">
              {file.content?.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            {file.content?.link && (
              <a href={file.content.link} target="_blank" rel="noopener" className="project-link">
                Launch Project
              </a>
            )}
          </div>
        ) : (
          <div className="folder-view">
            {file.files?.map(f => (
              <div key={f.id} className="folder-file" onClick={() => onOpenFile(f)}>
                <img src={f.icon} alt={f.title} />
                <span>{f.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Window;