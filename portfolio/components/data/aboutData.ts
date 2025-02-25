export interface BiographySection {
  year: string;
  text: string;
  images?: string[]; // URLs for images (optional)
}

// Example data structure
export const biographySections: BiographySection[] = [
  {
    year: "2008",
    text: "I began my leadership journey as the president of my school cooperative company at age 15...",
    images: ["/images/newspaper1.jpg", "/images/event1.jpg"],
  },
  {
    year: "2012",
    text: "As I continued to develop, I participated in various conferences and expanded my skills...",
    images: ["/images/conference1.jpg"],
  },
  // ... more sections
];
