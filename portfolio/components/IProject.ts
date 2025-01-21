// src/types.ts
export interface Project {
    id: number,
    title: string;
    image: string;
    categories: Array<string>;
    summary: string, // short text for the card version descriptio
    description: string; // larger text to display in the focused project view
    video: string; // embeded youtube video link
    link: string; //link to the git-hub repo with the source code 
  }
  