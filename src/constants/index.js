// import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import jarvis from "../assets/projects/J.A.R.V.I.S..jpg";

export const HERO_CONTENT = `I am an enthusiastic aspiring full stack developer with a strong eagerness to learn and adapt to new technologies. Although I am early in my career, I have already gained a solid understanding of both front-end and back-end development through my studies and personal projects. I am particularly interested in technologies such as React and Node.js, and I am committed to expanding my knowledge in areas like Next.js, MySQL, PostgreSQL, and MongoDB. My goal is to harness my passion for technology and my quick learning ability to contribute to innovative projects and grow as a developer in a dynamic and challenging environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Voice Activated Personalised Assistant",
    image: jarvis,
    description:
      "A very cool voice activated assistant implementing chat-GPT api calls as well as giving live weather report analysis and playing and controlling media (spotify ,youtube)",
    technologies: ["Python", "Chat-GPT", "Beautiful Soup"],
  },
  {
    title: "ToDo Application",
    image: project2,
    description:
      "An application for managing tasks and activities with features such as task creation, updation and deletion.",
    technologies: ["HTML", "CSS", "MongoDb", "Express","React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWind"],
  },
  {
    title: "Online Discussion Forum",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like , daily discussions , anonymous msessages commenting, and user profiles.(IN PROGRESS)",
    technologies: ["HTML", "CSS", "Express", "mySQL" , "MongoDb" , "NodeJs" ,"React"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
