interface ProjectContent {
    description: string;
    technologies: string[];
    image: string;
    link?: string;
  }
  
  export default interface ProjectFile {
    id: string;
    title: string;
    icon: string;
    type: 'application' | 'folder' | 'document';
    content?: ProjectContent;
    files?: ProjectFile[];
  }