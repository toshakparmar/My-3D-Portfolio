import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    php,
    mysql,
    threejs,
    appincuba,
    quantum, 
    mjpru,
    cbse,
    taxtube,
    devsoft,
    markmyattendance
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Sketch Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MySql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "AppinCuba",
      icon: appincuba,
      iconBg: "#d3d3d3",
      date: "December 2022 - November 2023",
      points: [
        "Developing and maintaining web applications using PHP & Laravel Framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing Demending Features and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  const educations = [ 
    {
      course: "Master's of Computer Application (MCA) ",
      university: "Quantum University, Roorkee",
      icon: quantum,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      points: [
        "This is 2 Year's Course MCA in which i learnt about the Computer Software its Languages and Behaviour.",
        "I learned C, C++, Java, Python, HTML, CSS, JavaScript, PHP, MySQL Languages and other Technologies during this Course & I will learn more.",
      ],
    },
    {
      course: "Bachelor of Computer Application (BCA)",
      university: "MJP Rohilkhand University, Bareilly",
      icon: mjpru,
      iconBg: "#E6DEDD",
      date: "July 2019 - Dec 2022",
      points: [
        "This is 3 Year's Course BCA in which i learnt about the Computer Fundamental as well as some Programming languages.",
        "I completed my course & degree with 71% marks, I made 3-4 projects.",
      ],
    },
    {
      course: "High School (10th) & Intermediate (12th)",
      university: "OPGM Ser Sec School, Chandausi",
      icon: cbse,
      iconBg: "#383E56",
      date: "Apr 2015 - Mar 2019",
      points: [
        "I completed my 10th with Good marks as well as I done my 12th.",
        "My School is CBSE School I learnt at of things in my school time.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Taxtube",
      descriptions: [
        `• Overview :  It is Website which I built for a CA Firm while I am working in AppinCuba. Taxtube is Tax or Invoice Mangement System.`,
        "• Developed Features :  Invoice Creation, Invoice Approval System, Invoice Customization, Custom Fields, Addon, etc.",
        "• Duration :  Feb 2023- July 2023.",
        "• Client :  CA Firm Taxtube Private Limited.",
      ],
      tags: [
        {
          name: "PHP & Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript & BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: taxtube,
      source_code_link: "https://github.com/appincuba/Taxtube",
    },
    {
      name: "Dev-Soft",
      descriptions: [
        "• Overview :  It is Plateform for Student/Working Proffessional Learn Improve our Soft Skills throufh Devi AI (LLM Model).",
        "• Developed Features :  Devi (AI) Voice Communcation Trainer, Soft- Skills Library, etc.",
        "• Duration :  April 2024- till now (Working).",
        "• Client :  Me (Learning Purpose)."
    ],
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Vapi-Ai",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: devsoft,
      source_code_link: "https://github.com/toshakparmar/Dev-Soft",
    },
    {
      name: "MarkMyAttendance",
      descriptions: [
        "• Overview :  It is Attendance Marker Android Application, I am making this application firstly for my college use.",
        "• Developed Features :  Add Students, Attendance System, PDF Generation, PDF Shareable, etc.",
        "• Duration :  Jan 2024- Mar 2024.",
        "• Client :  My College and CR’s.",
      ],
      tags: [
        {
          name: "Java & XML",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite & PDFReader",
          color: "green-text-gradient",
        },
        {
          name: "Android Studio",
          color: "pink-text-gradient",
        },
      ],
      image: markmyattendance,
      source_code_link: "https://github.com/toshakparmar/MarkMyAttendance",
    },
  ];
  
  export { services, technologies, experiences, educations, projects };