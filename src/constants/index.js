// import project1 from "../assets/projects/project-1.jpg";
import convo from "../assets/projects/convo.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import jarvis from "../assets/projects/J.A.R.V.I.S..jpg";
import dbms from "../assets/Certification/Scaler dbms.png";
import aws_image from "../assets/Certification/AWS.png";
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
    title: "Convo",
    image: convo,
    description: "A platform for real time chatting with other users.",
    technologies: ["NodeJs", "MongoDb", "Express", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWind"],
  },
  {
    title: "Train Booking System",
    image: project4,
    description:
      "A backend project for a train booking system (IN PROGRESS LEARNING JAVA SPRING FRAMEWORK)",
    technologies: ["Java", "Bcrypt", "Spring Boot", "JWT"],
  },
];

export const CONTACT = {
  address: "Kasavanhalli Bengaluru Karnataka",
  phoneNo: "+91 7903148611",
  email: "kaustubh26vatsa@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title: "Scaler DBMS",
    image: dbms,
    link: "https://drive.google.com/file/d/1XbKsEggGby8BkDW29GdkjkmqfHu1GYJK/view",
  },
  {
    title: "AWS Cloud Academy Graduate Certificate",
    image: aws_image,
    link: "https://drive.google.com/file/d/1SKOOMmtNhzi3VGlYWDNy-vSxzafkvfQr/view?usp=sharing",
  },
];
