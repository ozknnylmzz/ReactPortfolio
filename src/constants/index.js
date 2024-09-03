import project1 from "../assets/projects/matchlegendslogo.webp";
import project2 from "../assets/projects/goodybody.jpeg";
import project3 from "../assets/projects/culinlogo.webp";
import company1 from "../assets/projects/culinlogo.webp";


export const HERO_CONTENT = `I am a dedicated full stack developer with a strong background in both web and game development. Since early 2020, I have been working with C# and the .NET Framework to develop MVC web applications. After a year in web development, I transitioned to game development using C# and Unity, where I honed my skills over a period of three years. In the past six months, I have been focusing on frontend technologies, specifically React and Flutter. I have built a portfolio site using React and continue to work on various projects. Currently, I am developing projects with React and working on mobile applications using Flutter. One of the projects I am developing with Flutter is "Culin," an AI-powered cooking app, which I aim to complete.`;

export const ABOUT_TEXT = `My journey as a developer began with a deep curiosity for understanding how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. I am a dedicated full stack developer with 5 years of experience. During this time, I have spent 4 years working with C#, including 1 year in web application development and 3 years in game development. For the past year, I have been developing full stack mobile applications for iOS and Android.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Game Developer-Software Engineer",
    company: "Imaginite Studios",
    description: `Completed the development of approximately 8 different hypercasual games and worked on a match-3 puzzle casual game for a year. Contributed to various aspects of game development, including gameplay mechanics, backend integration, and animation. Implemented network code using Photon to develop a PvP mode, and utilized Unity Multiplayer services for matchmaker solutions to ensure seamless player matchmaking and online gameplay experience.`,
    technologies: ["Unity", "Java Spring", "C#", "MongoDB", "Unity Services", "Fishnet", "Spine", "Photon Fusion"],
    image:company1,
  },
  {
    year: "2021 - 2022",
    role: "Game Developer",
    company: "Roco Game Studios",
    description: `Developed multiplayer and game logic code for the game "Goody Body" using C# within the Unity environment. Implemented multiplayer features utilizing the Mirror library to ensure seamless online gameplay.`,
    technologies: ["Unity3D", "C#", "Mirror"],
    image:project2,
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "DNB Analytics",
    description: `Developed web applications using C# and the .NET Framework, with a focus on MVC technology. Contributed to full stack software development, working with both frontend and backend technologies. Utilized C#, JavaScript, and SQL Lite to implement robust and scalable solutions.`,
    technologies: ["C#", ".NET Framework", "JavaScript", "HTML", "SQL Lite"],
    image:project3,
  },
];

export const PROJECTS = [
  {
    title: "Match Legend - PVP Match3D Mobile Game",
    image: project1,
    description:
      "Match Legend is a PvP match-3 puzzle mobile game where players compete in different leagues based on their scores, facing off against opponents with similar skill levels. I was involved from the beginning of the project through to the soft launch, taking on tasks across all stages of development.",
    technologies: ["Unity2D", "Photon fusion", "Spring Boot", "Spine","Fishnet"],
    
  },
  {
    title: "Goody Boody - PC Game",
    image: project2,
    description:
     "Goody Boody is a PC game inspired by Fall Guys, where players navigate through various game mechanics and logic that I developed. I was responsible for implementing all the game logic mechanics, as well as handling the multiplayer network coding to ensure smooth and engaging online gameplay.",
    technologies: ["Unity3D", "Mirror", "Unity Services"],
  },
  {
    title: "Culin - Full Stack Developer",
    image: project3,
    description:
      "I have been developing this project on my own for about a month. Designed as an AI-powered meal listing application, this project allows users to track their favorite foods and receive personalized recommendations. It also serves as a personal portfolio website, showcasing my projects, skills, and contact information.",
    technologies: ["Flutter", "Firebase", "BLoC", "RESTful API"],
  },

];

export const CONTACT = {
  address: "Bahcelievler / Istanbul",
  phoneNo: "+90 536 953 99 26 ",
  email: "nzmozknylmz@gmail.com",
};
