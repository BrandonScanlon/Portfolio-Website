import React, { useEffect, useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import ProjectFile from './models/ProjectFile';
import MobileWarning from './components/MobileWarning';

const App: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<ProjectFile[]>([]);
  const [isMobile, setIsMobile] = useState(false); // Add mobile state

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: ProjectFile[] = [
    {
      id: 'projects',
      title: 'Projects',
      icon: './icons/folder.png',
      type: 'folder',
      files: [
        {
          id: 'proj1',
          title: 'Off-Grid Biogenic Refinery',
          icon: './icons/document.png',
          type: 'document',
          content: {
            description: 'At Biomass Controls PBC, I was challenged with developing a system that would provide an HMI application for users to control and monitor an embedded control system, operated completely off grid. The system I designed featured these requirements, complete with data acquisition, analytics, storing and forwarding the data for days at a time, and system time setting to keep the data in reference to the correct time of day. A modular piece of the hardware could then be taken to a source of internet (via WiFi or ethernet connection) to then upload its accumulated data. This system now runs successfully in multiple locations in remote Alaska transforming human waste into energy and biochar.',
            technologies: ["Embedded Control Systems", "HMI Applications", "Data Acquisition", "Data Analytics", "Off-Grid Distributed Systems"],
            image: './icons/kivalina.jpg',
          },
        },
    ]
    },
    {
      id: 'skills',
      title: 'Languages',
      icon: './icons/folder.png',
      type: 'folder',
      files: [
        {
          id: 'skill1',
          title: 'Java',
          icon: './icons/Java.png',
          type: 'document',
          content: {
            description: 'My first programming language! I have done work with java for Web Development, Embedded Systems, Android Applications, HMI Applications, and more!',
            technologies: ['JavaFX', 'Maven', 'Gradle', 'Vaadin', 'Android Studio'],
            image: './icons/Java.png',
          },
        },
        {
          id: 'skill2',
          title: 'Python',
          icon: './icons/Python.png',
          type: 'document',
          content: {
            description: 'I have leveraged Python for a number of use cases professionally: data aquisition, scripting, Machine Learning, Artificial Intelligence, and web scraping.',
            technologies: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'NumPy', 'SciPy', 'Pandas', 'Django'],
            image: './icons/Python.png',
          },
        },
        {
          id: 'skill3',
          title: 'PHP',
          icon: './icons/PHP.png',
          type: 'document',
          content: {
            description: 'I have utilized PHP for RESTful APIs connecting multiple applications to databases. I have also used PHP for custom email, SMS, and push notifications based on real-world data from physical systems.',
            technologies: ['Laravel', 'REST', 'JSON', 'APIs', 'MySQL', 'Email Notifications', 'SMS Notifications', 'Push Notifications'],
            image: './icons/PHP.png',
          },
        },
        {
          id: 'skill4',
          title: 'C',
          icon: './icons/C.png',
          type: 'document',
          content: {
            description: 'I have used C / embedded C for control logic and hardware interfacing on a complex, custom microcontroller used to control Biogenic Refineries, by Biomass Controls PBC, deployed in the field.',
            technologies: ['Embedded C', 'Microcontrollers', 'Control Logic', 'Hardware Interfacing', 'Modbus', 'CAN Bus'],
            image: './icons/C.png',
          },
        },
        {
          id: 'skill5',
          title: 'C++',
          icon: './icons/C++.png',
          type: 'document',
          content: {
            description: 'I have used C++ to begin replacing the existing embedded C controller code with a more robust, object-oriented design. In doing so, I have begun to research, test, and implement Machine Learning models to replace the previously used PID controllers.',
            technologies: ['TensorFlow', 'Caffe', 'Armadillo', 'FANN'],
            image: './icons/C++.png',
          },
        },
        {
          id: 'skill6',
          title: 'Objective-C',
          icon: './icons/Objective-C.png',
          type: 'document',
          content: {
            description: 'I have developed and maintained an iOS application used to reflect all of the data collected from the many Biogenic Refineries Biomass Controls PBC has in the field. The app features data analytics, graphing, system controls, sensor monitoring, etc.',
            technologies: ['iOS Application Development'],
            image: './icons/Objective-C.png',
          },
        },
        {
          id: 'skill7',
          title: 'Swift',
          icon: './icons/Swift.png',
          type: 'document',
          content: {
            description: 'I have been slowly converting the existing iOS Application\'s Objective-C code to Swift. I have also been working on a UI/UX overhaul of the existing iOS Application.',
            technologies: ['iOS Application Development', 'SwiftUI'],
            image: './icons/Swift.png',
          },
        },
        {
          id: 'skill8',
          title: 'Kotlin',
          icon: './icons/Kotlin.png',
          type: 'document',
          content: {
            description: 'I have been slowly converting the existing Android Application Java code to Kotlin. I have also been working on another UI/UX overhaul of the existing Android Application using Kotlin.',
            technologies: ['Android Application Development'],
            image: './icons/Kotlin.png',
          },
        },
        {
          id: 'skill9',
          title: 'GoLang',
          icon: './icons/GoLang.png',
          type: 'document',
          content: {
            description: 'I have dabbled in Go to eventually replace the 150+ APIs Biomass Controls PBC has which are all currently written in PHP for production.',
            technologies: ['APIs', 'REST', 'JSON'],
            image: './icons/GoLang.png',
          },
        },
        {
          id: 'skill10',
          title: 'MySQL',
          icon: './icons/MySQL.png',
          type: 'document',
          content: {
            description: 'MySQL is the database language that was chosen for Biomass Controls\' technology stack originally. I have used MySQL for all of the data aquisition, storage, and analytics for the Biogenic Refineries and subsequent applications, as well as, on other projects in the past.',
            technologies: ['SQL', 'RDS', 'Databases'],
            image: './icons/MySQL.png',
          },
        },
        {
          id: 'skill11',
          title: 'JavaScript',
          icon: './icons/JavaScript.png',
          type: 'document',
          content: {
            description: 'I have maintained and developed new features for a web application written in React/Redux via JavaScript. This web application is used to reflect all of the data collected from the many Biogenic Refineries Biomass Controls PBC has in the field. The app features data analytics, complex graphing, system controls, sensor monitoring, and more.',
            technologies: ['AmCharts', 'React', 'Redux', 'Node.js'],
            image: './icons/JavaScript.png',
          },
        },
        {
          id: 'skill12',
          title: 'TypeScript',
          icon: './icons/TypeScript.png',
          type: 'document',
          content: {
            description: 'TypeScript was my backend language of choice for the new Web Application I have been developing to replace Biomass Controls\' original Web Application. I chose it over JavaScript since it is statically typed, has enhanced IDE support, and is more maintainable in the long run.',
            technologies: ['React', 'Node.js'],
            image: './icons/TypeScript.png',
          },
        },
        {
          id: 'skill13',
          title: 'CSS',
          icon: './icons/CSS.png',
          type: 'document',
          content: {
            description: 'Cascading Style Sheets is essential to make any Web Application look pretty!',
            technologies: ['CSS3', 'SASS', 'Bootstrap'],
            image: './icons/CSS.png',
          },
        },
        {
          id: 'skill14',
          title: 'HTML',
          icon: './icons/HTML.png',
          type: 'document',
          content: {
            description: 'Another essential web technology. I have used HTML to create the structure of all of the different Web Applications I have developed. Including this one!',
            technologies: ['HTML5'],
            image: './icons/HTML.png',
          },
        },
        {
          id: 'skill15',
          title: 'Bash',
          icon: './icons/Bash.png',
          type: 'document',
          content: {
            description: 'I have used bash for scripting, embedded automation, and data aquisition on various Linux systems.',
            technologies: ['Shell Scripting', 'Automation', 'Linux'],
            image: './icons/Bash.png',
          },
        },
        {
          id: 'skill16',
          title: 'Dart',
          icon: './icons/Dart.png',
          type: 'document',
          content: {
            description: 'I have used Dart for mobile application development with the Flutter framework. I have worked on replacing all three applications Biomass Controls has with Flutter to easily maintain one codebase for iOS and Android, and Web.',
            technologies: ['Flutter', 'Mobile Application Development'],
            image: './icons/Dart.png',
          },
        },
        {
          id: 'skill17',
          title: 'LaTeX',
          icon: './icons/LaTeX.png',
          type: 'document',
          content: {
            description: 'I have used LaTeX primarily for educational projects for documentation reports, and homework.',
            technologies: ['Documentation', 'Mathematics'],
            image: './icons/LaTeX.png',
          },
        },
        {
          id: 'skill18',
          title: 'R',
          icon: './icons/R.png',
          type: 'document',
          content: {
            description: 'I have used R for data analysis, statistics, and Machine Learning. Additionally, I have used R for data visualization.',
            technologies: ['Data Visualization', 'Data Analysis', 'Statistics', 'Machine Learning', 'RStudio'],
            image: './icons/R.png',
          },
        },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: './icons/folder.png',
      type: 'folder',
      files: [
        {
          id: 'tool1',
          title: 'GitHub',
          icon: './icons/GitHub.png',
          type: 'document',
          content: {
            description: 'Obviously!',
            technologies: ['Version Control'],
            image: './icons/GitHub.png',
          },
        },
        {
          id: 'tool2',
          title: 'Linux',
          icon: './icons/Linux.png',
          type: 'document',
          content: {
            description: 'I have used Linux as my platform of choice for embedded systems development and cloud servers.',
            technologies: ['Apache', 'Nginx'],
            image: './icons/Linux.png',
          },
        },
        {
          id: 'tool3',
          title: 'AWS',
          icon: './icons/AWS.png',
          type: 'document',
          content: {
            description: 'I have utilized a number of AWS services from ECS, RDS, S3, SNS, and more to host web applications, databases, deliver custom notifications, and connect services together.',
            technologies: ['ECS', 'ECR', 'RDS', 'S3', 'SNS', 'CloudFormation', 'EC2', 'Route53', 'SES', 'IAM', "Amplify"],
            image: './icons/AWS.png',
          },
        },
        {
          id: 'tool4',
          title: 'Jira',
          icon: './icons/Jira.png',
          type: 'document',
          content: {
            description: 'Jira has aided a number of projects I have been a part of and some that I have managed. I have used Jira, as well as Jira Service Management for project management, task management, and bug tracking.',
            technologies: ['Jira Service Management'],
            image: './icons/Jira.png',
          },
        },
        {
          id: 'tool5',
          title: 'Confluence',
          icon: './icons/Confluence.png',
          type: 'document',
          content: {
            description: 'I have used Confluence on multiple projects for documentation, project management, and knowledge sharing.',
            technologies: ['Documentation'],
            image: './icons/Confluence.png',
          },
        },
        {
          id: 'tool6',
          title: 'Docker',
          icon: './icons/Docker.png',
          type: 'document',
          content: {
            description: 'Biomass Controls\' original web application was hosted in a Docker container that was apart of a monolothic structure (among other services). I have since broken it down into separate microservices for different use cases and maintainability.',
            technologies: ['Web Application Hosting'],
            image: './icons/Docker.png',
          },
        },
      ],
    },
  ];

  const openFile = (file: ProjectFile) => {
    if (!openWindows.some(w => w.id === file.id)) {
      setOpenWindows([...openWindows, file]);
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  return (
    <div className="os-container">
      {isMobile ? (
        <MobileWarning />
      ) : (
        <>
          <Desktop 
            projects={projects} 
            onOpenFile={openFile} 
          />
          
          {openWindows.map((window) => (
            <Window
              key={window.id}
              file={window}
              onClose={() => closeWindow(window.id)}
              onOpenFile={openFile}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;