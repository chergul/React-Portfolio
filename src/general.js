//------Put general things in here for react and render your page that you want ------//

// Update about me in here and also can change img from css!
const sectionAbout = "About Me";
const about = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

//Projects go here and can change img from css!
const projects = [
    {
      id: "project1",
      name: "Apointment Manager",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/chergul/appointment-manager",
    },
    {
      id: "project2",
      name: "Budget Tracker",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/chergul/MyBudgetTracker",
    },
    {
      id: "project3",
      name: "Project 3",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/chergul",
    },
    {
      id: "project4",
      name: "Project 4",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/chergul",
    },
    {
      id: "project5",
      name: "Project 5",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/chergul",
    },
    {
      id: "project6",
      name: "Project 6",
      skills: ["HTML, CSS, JS"],
      link: "https://github.com/chergul",
    },
  ];

//Skills go here 
const skills = [
    {
      name: "HTML5",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js",
    },
    {
      name: "Node",
      faClass: "fab fa-node",
    },
    {
      name: "Database",
      faClass: "fas fa-database",
    },
  ];

//This is for contact part
const contactTitle = "Get in Touch with me";
const contact = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Ceyda H. Hergul",
  contactUrl: "",
};

// Export
export {
    sectionAbout,
    about,
    contactTitle,
    contact,
    projects,
    skills,
  };