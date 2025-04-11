import React, { useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import ProjectFile from './models/ProjectFile';

const App: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<ProjectFile[]>([]);
  
  const projects: ProjectFile[] = [
    {
      id: 'projects',
      title: 'Projects',
      icon: './icons/folder.png',
      type: 'folder',
      content: {
        description: 'E-commerce platform with React/Node',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: '/projects/ecom-screenshot.jpg',
        link: 'https://example.com/project1',
      },
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
            image: '../icons/Java.png',
          },
        },
        {
          id: 'skill2',
          title: 'Python',
          icon: './icons/Python.png',
          type: 'document',
          content: {
            description: 'Snake: "Tssss..." I have leveraged Python for a number of use cases professionally: data aquisition, scripting, Machine Learning, Artificial Intelligence, and web scraping.',
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
            description: 'I have utilized PHP for RESTful APIs connecting all of our applications to an RDS MySQL database. I have also used PHP for custom email, SMS, and push notifications based on real-world data from physical systems.',
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
            description: 'I have used C / embedded C for the control logic and hardware interfacing on a complex, custom microcontroller used to control Biogenic Refineries deployed in the field.',
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
            description: 'I have used C++ to replace the existing embedded C controller code with a more robust, object-oriented design. In doing so, I have begun to research, test, and implement Machine Learning models to replace the previously used PID controllers.',
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
            description: 'I have been slowly converting the existing iOS Application Objective-C code to Swift. I have also been working on a UI/UX overhaul of the existing iOS application.',
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
            description: 'I have been slowly converting the existing Android Application Java code to Kotlin. I have also been working on a UI/UX overhaul of the existing Android application.',
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
            description: 'I have dabbled in Go to replace the 150+ APIs Biomass Controls PBC has which are all currently written in PHP in production.',
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
            description: 'MySQL I the database language that was chosen for Biomass Controls\' technology stack originally. I have used MySQL for all of the data aquisition, storage, and analytics for the Biogenic Refineries and subsequent applications.',
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
            description: 'I have maintained and developed new features for a web application written in React/Redux via JavaScript. This web application is used to reflect all of the data collected from the many Biogenic Refineries Biomass Controls PBC has in the field. The app features data analytics, complex rgaphinh, system controls, sensor monitoring, etc.',
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
            description: 'TypeScript was my backend language of choice for the new web application I have been developing to replace Biomass Controls\' original web application. I chose it over JavaScript because it is statically typed, has enhanced IDE support, and is more maintainable in the long run.',
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
            description: 'Cascading Style Sheets is essential to make any web application look pretty!',
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
            description: 'Another essential web technology. I have used HTML to create the structure of the web applications I have developed.',
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
            description: 'Bash? More like BASH! I have used bash for scripting, automation, and data aquisition on various Linux systems.',
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
            description: 'Dart, what a cool programming language. I have used Dart for mobile application development with Flutter. I have worked on replacing all three applications Biomass Controls has with Flutter to easily maintain one codebase for iOS and Android, and Web.',
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
            description: 'I have used LaTeX primarily for educational projects, but I have also used it for documentation and reports.',
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
            description: 'I have used R for data analysis, statistics, and machine learning. I have also used R for data visualization.',
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
            description: 'Critical for embedded systems development, and a great OS for development in general.',
            technologies: ['Apache:2', 'Nginx'],
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
            technologies: ['ECS', 'ECR', 'RDS', 'S3', 'SNS', 'CloudFormation', 'EC2', 'Route53', 'SES', 'IAM'],
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
            description: 'Biomass Controls\' original web application was hosted on a Docker container in a monolothic structure (among other services). I have since broken it down into separate microservices for different use cases and maintainability.',
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
    </div>
  );
};

export default App;