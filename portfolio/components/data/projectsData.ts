// src/projects.ts
import { Project } from '../IProject'; // Import the interface

export const projectsData: Project[] = [
    {
    id: 1,
    featured: true,
    title: "Uno Park",
    image: "/images/UnoHome.png",
    categories: ["Unity", "API", "C#", "Videogame"],
    summary: "Uno Park is a fully-featured 3D game developed using C# and Unity game engine. A re-design of the classic UNO experience.",
    description: `**"Uno Park"** is a 3D Unity game developed as my final project for the Software Development AAS program at Fox Valley Technical College. \n\nWhile most classmates created 2D games and programs, I chose to self-learn *Unity 3D* for a more challenging experience. \n\nMy partner, _[Austin Steffes](https://www.linkedin.com/in/austin-steffes/)_, handled the **server-side backend**, database, and part of the game API using **Microsoft Azure**, while I focused on **Unity development**. This included world modeling, menu design, camera movement, animations, and overall game functionality. \n\nThe game idea was designed around the camera movement and animation. I aimed to showcase a park-themed environment with in-game objects acting as interactive menus for a better immersive experience.`,
    video: "https://www.youtube.com/embed/H7cmYf08RQY?feature=oembed",
    link: "https://github.com/Cdguzmanr/UnoPark-Unity.git"
  },
  {
    id: 2,
    featured: false,
    title: "The Hobby Hub",
    image: "/images/TheHobbyHubHome.png",
    categories: ["ASP.Net", "C#", "Agile Methodologies",],
    summary: "A ASP.Net application built in collaboration with a multidiciplinary team of developers following Agile Methodologies.",
    description: `This is my final project for the Agile Methodologies class, where I worked with three other developers using SCRUM for project management. The Hobby Hub is an **ASP.NET MVC** project built with **.NET Core**, following a code-first database approach using **Microsoft Entity Framework**. To ensure data security, we implemented **GUIDs** for unique identifiers and hashed user passwords. \n\nThe project features **JavaScript animations** and design elements to enhance the user experience. We also used CodePen.io to draw inspiration from public scripts, modifying the code to fit the MVC structure and meet specific project requirements.`,
    video: "https://www.youtube.com/embed/eUvfKQzT1qs?feature=oembed",
    link: "https://github.com/Cdguzmanr/TheHobbyHub.git"
  },
  {
    id: 3,
    featured: true,
    title: "DVD Central",
    image: "/images/DVDCentral3.png",
    categories: ["ASP.Net", "C#", "API",],
    summary: "A scalable web application built using ASP.NET MVC and Microsoft SQL Server.",
    description: `DVD Central is the main project developed in my ASP.Net class (3rd Term), and half of Advanced Software Development (4th term). \n\nThe project was **developed individually** to practice and improve the knowledge worked in class, including Object Oriented Programming (OOP), **ASP .Net**, **Model-View-Controller (MVC)**, **Mode-View-Viewmodel (MVVM)**, Source control using **Git**, **Microsoft Azure** (DevOps, SQL Database, API Keys), Visual Studio development environment, among others.`,
    video: "https://www.youtube.com/embed/tHnoCH-a7KA?feature=oembed",
    link: "https://github.com/Cdguzmanr/DVDCentral_Advanced.git"
  },
  {
    id: 4,
    featured: true,
    title: "Criptografia",
    image: "/images/Criptografia.jpg",
    categories: ["Python", "Cybersecurity"],
    summary: "A Python script app to code and decode text in 8 different cryptography methods: Caesar Cipher, Key-based Cipher, Vigenère Substitution, XOR Substitution with Key, Reversed Word, Reversed Message, Telephone Cipher, Binary Cipher",
    description: `**Criptografia** is a **Python-based** script application developed as my first project for the *Programming Workshop* course at the Costa Rica Institute of Technology.\n\nThis project enables users to **encode and decode** text using eight different cryptographic methods, offering a hands-on exploration of fundamental encryption techniques.\n### Supported Cryptography Methods:\n1. **Caesar Cipher** - Shifts each letter in the text by a fixed number of positions.\n2. **Key-Based Cipher** - Encrypts text using a user-defined key for character substitution.\n3. **Vigenère Cipher** - Uses a keyword to perform polyalphabetic substitution.\n4. **XOR Substitution with Key** - Applies a bitwise XOR operation with a key for encryption.\n5. **Reversed Word** - Reverses individual words while maintaining their original order.\n6. **Reversed Message** - Reverses the entire message for simple obfuscation.\n7. **Telephone Cipher** - Mimics the transformation of letters to numbers as seen on a telephone keypad.\n8. **Binary Cipher** - Converts text into its binary representation.\n\nThis project helped me develop foundational programming skills, including string manipulation, algorithm design, and user input handling in Python.`,
    video: "https://www.youtube.com/embed/McWwvHpWrZU?si=rT5b-0qPrZPakPbm",
    link: "https://github.com/Cdguzmanr/Cdguzmanr-TP1-Carlos-Samuel-"
  },
  {
    id: 5,
    featured: true,
    title: "Space Fighters",
    image: "/images/SpaceFighters.jpg",
    categories: ["C++", "Videogame"],
    summary: "A 2D space shooter game inspired by Galaga, featuring a power-up system, enhanced graphics, and an improved background—built as a C++ class project.",
    description: "**Space Fighters** is a **2D space shooter game** inspired by *Galaga*, developed as the final project for my *C++* course at Fox Valley Technical College.\n\nOur instructor provided the core structure, and our team of four focused on implementing **extra features** to enhance gameplay.\n\n### Key Features:\n- **Power-Up System:** Defeated enemies had a probability of dropping power-ups, adding strategic depth to the game.\n- **First Implemented Power-Up:** A **red power-up** that increased the ship's attack speed.\n- **Enhanced Graphics:** I redesigned the spaceship and power-up visuals, using distinct color patterns to represent different abilities.\n- **Improved Background Design:** We refined the game's aesthetic for a more modern look.\n\nAs our **first major project** in C++, we faced technical challenges but leveraged creativity to push the game's mechanics forward. While only one power-up was fully implemented due to time constraints, we successfully established the **framework for future expansions**.",
    video: "https://www.youtube.com/embed/JNAJQLihZww?si=ETTBARcbXyD5rp-k",
    link: "https://github.com/Cdguzmanr/SpaceFighters"
  },
  {
    id: 6,
    featured: false,
    title: "Grocery List",
    image: "/images/GroceryListDemo.png",
    categories: ["Java", "Android", "API"],
    summary: "A mobile app built in Android Studio to manage grocery lists, featuring API authentication, item tracking, and camera integration for adding images.",
    description: "**Grocery List** is a **mobile app** developed in *Android Studio* as part of my *Mobile Development* course. The project focused on integrating **APIs** to manage data between views.\n\n### Core Features:\n1. **Login & Profile Management:** Users enter their name, which is verified against an API managed by our instructor (*Brian Foote*). If the profile exists, their grocery list is retrieved; otherwise, they are prompted to create an account.\n2. **Grocery List Management:** Displays a list of grocery items, each with a name, image, and checkbox for tracking. Users can navigate between different list views (*master list, marked items, etc.*).\n3. **Item Modification & Camera Integration:** Users can add new items, edit details, and capture images using their phone’s camera—offering a hands-on experience with Android device functionalities.\n\nThis project strengthened my skills in **Android development**, **API handling**, and **camera integration**, allowing me to build a fully interactive and dynamic mobile experience.",
    video: "https://www.youtube.com/embed/XUImmFdMdQI?si=fcgH174Ce_Rr1z9R",
    link: "https://github.com/Cdguzmanr/Android-GroceryList"
  },
  {
    id: 7,
    featured: false,
    title: "Gallery App",
    image: "/images/GalleryAppDemo.jpg",
    categories: ["Java", "Android"],
    summary: "An Android app displaying image-text cards with data imported from external files, featuring animations and an interactive flipping effect.",
    description: "**Gallery App** is a **mobile application** developed in *Android Studio* as part of my *Mobile Development* course. The project focused on importing **text data from external files** to improve data management and dynamically display content.\n\n### Core Features:\n1. **Card-Based Display:** Each card presents an image and text on the front and back. I chose to showcase *touristic areas of Costa Rica*, making the app both functional and visually engaging.\n2. **Data Import from External Files:** Reads text data from `.txt` files, making the project more structured and scalable.\n3. **Custom Animations & Card Flipping:** Implemented visual enhancements beyond the class requirements, adding animations for flipping and transitioning between cards.\n\nAs one of my **first Android projects**, this app reflects my early exploration of **front-end design**, **data handling**, and **animation effects**. While my technical skills were still developing, my motivation to push beyond expectations set the foundation for my continuous learning and growth as a developer.",
    video: "https://www.youtube.com/embed/35e5nI2LJzQ?si=2Cs65NG9Vx0Yx2xD",
    link: "https://github.com/Cdguzmanr/Android-GalleryApp"
  }
  
];
