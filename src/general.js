//------Put general things in here for react and render your page that you want ------//


// Update about me in here and also can change img from css!
const sectionAbout = "About Me";
const about = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

//Update home page 
const name = "Ceyda Hergul";
const title = "Full-Stack Web Developer";

//Projects go here and can change img from css!
const projects = [
    {
      id: "project1",
      name: "Apointment Manager",
      skills: ["HTML, CSS, JS, Handlebars, Bootstrap, JQuery"],
      url: "https://github.com/chergul/appointment-manager",
    },
    {
      id: "project2",
      name: "Budget Tracker",
      skills: ["HTML, JS, MongoDB, IndexedDB"],
      url: "https://github.com/chergul/MyBudgetTracker",
    },
    {
      id: "project3",
      name: "Note Taker",
      skills: ["HTML, CSS, JS, Express.js,"],
      url: "https://github.com/chergul",
    },
    {
      id: "project4",
      name: "Atmos Project",
      skills: ["HTML, CSS, JS, API's"],
      url: "https://github.com/chergul",
    },
    {
      id: "project5",
      name: "Workout Tracker",
      skills: ["HTML, CSS, JS, NoSQL"],
      url: "https://github.com/chergul",
    },
    {
      id: "project6",
      name: "Employee Tracker",
      skills: ["MySQL, Express.js"],
      link: "https://github.com/chergul",
    },
  ];

//Skills go here 
const skills = [
    {
      name: "HTML5",
      faClass: "fab fa-html5 fa-3x",
    },
    {
      name: "CSS3",
      faClass: "fab fa-css3 fa-3x",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js-square fa-3x",
    },
    {
      name: "React",
      faClass: "fab fa-react fa-3x",
    },
    {
      name: "Node",
      faClass: "fab fa-node fa-3x",
    },
    {
      name: "Database",
      faClass: "fas fa-database fa-3x",
    },
    {
      name: "Github",
      faClass: "fab fa-github fa-3x",
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
    name,
    title,
  };