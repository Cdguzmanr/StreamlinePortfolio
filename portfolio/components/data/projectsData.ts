// src/projects.ts
import { Project } from '../IProject'; // Import the interface

export const projectsData: Project[] = [
    {
    id: 1,
    title: "Unity 3D Game",
    image: "/images/UnoHome.png",
    categories: ["Unity", "API", "C#"],
    summary: "A fully-featured 3D game developed using C# and Unity game engine.",
    description: `**"Uno Park"** is a 3D Unity game developed as my final project for the Software Development AAS program at Fox Valley Technical College. \nWhile most classmates created 2D games and programs, I chose to self-learn *Unity 3D* for a more challenging experience. \nMy partner, [Austin Steffes](https://www.linkedin.com/in/austin-steffes/), handled the **server-side backend**, database, and part of the game API using **Microsoft Azure**, while I focused on Unity development. This included world modeling, menu design, camera movement, animations, and overall game functionality. \nThe game idea was designed around the camera movement and animation. I aimed to showcase a park-themed environment with in-game objects acting as interactive menus for a better immersive experience.`,
    video: "https://www.youtube.com/embed/H7cmYf08RQY?feature=oembed",
    link: "https://github.com/Cdguzmanr/UnoPark-Unity.git"
  },
  {
    id: 2,
    title: "The Hobby Hub",
    image: "/images/TheHobbyHubHome.png",
    categories: ["ASP.Net", "C#", "Agile Methodologies",],
    summary: "A ASP.Net application built in collaboration with a multidiciplinary team of developers following Agile Methodologies",
    description: `This is my final project for the Agile Methodologies class, where I worked with three other developers using SCRUM for project management. The Hobby Hub is an ASP.NET MVC project built with .NET Core, following a code-first database approach using Microsoft Entity Framework. To ensure data security, we implemented GUIDs for unique identifiers and hashed user passwords. \nThe project features JavaScript animations and design elements to enhance the user experience. We also used CodePen.io to draw inspiration from public scripts, modifying the code to fit the MVC structure and meet specific project requirements.`,
    video: "https://www.youtube.com/embed/eUvfKQzT1qs?feature=oembed",
    link: "https://github.com/Cdguzmanr/TheHobbyHub.git"
  },
  {
    id: 3,
    title: "DVD Central",
    image: "/images/DVDCentral3.png",
    categories: ["ASP.Net", "C#", "API",],
    summary: "A scalable web application built using ASP.NET MVC and Microsoft SQL Server.",
    description: `DVD Central is the main project developed in my ASP.Net class (3rd Term), and half of Advanced Software Development (4th term). \nThe project was developed individually to practice and improve the knowledge worked in class, including Object Oriented Programming (OOP), ASP .Net, Model-View-Controller (MVC), Mode-View-Viewmodel (MVVM), Source control using Git, Microsoft Azure (DevOps, SQL Database, API Keys), Visual Studio development environment, among others.`,
    video: "https://www.youtube.com/embed/tHnoCH-a7KA?feature=oembed",
    link: "https://github.com/Cdguzmanr/DVDCentral_Advanced.git"
  },
];
