//------Put general things in here for react and render your page that you want ------//


// Update about me in here and also can change img from css!
const sectionAbout = "About Me";
const about = {
  text:
    "As a teenager at school who was formatting to her computer without any guides just by research, graduated from law school and practicing for over ten years now. Today took an opportunity and changed my career into a web developer to chase my dreams. I am a hard worker junior web developer writing codes and using libraries for my HTML to make a delicate website. Using JavaScript and jQuery for back-ends and responsiveness, I have adequate knowledge of object-oriented programming and databases. Fast learner, team player who is seeking an opportunity to extend my web development skills and expertise."
};

//Update home page 
const name = "Ceyda Hergul";
const title = "Full-Stack Web Developer";

//Projects go here and can change img from css!
const projects = [
    {
      id: "project1",
      name: "Appointment Manager",
      description: "All the appointment booking, cancellations, and price negotiations are handled via Instagram, which leads to late replies, double bookings, upset customers, and cancellations. Taken to the next level through application.",
      skills: ["HTML, CSS, JS, Handlebars, Bootstrap, JQuery"],
      url: "https://github.com/chergul/appointment-manager",
    },
    {
      id: "project2",
      name: "Budget Tracker",
      description: "The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
      skills: ["HTML, JS, MongoDB, IndexedDB"],
      url: "https://github.com/chergul/MyBudgetTracker",
    },
    {
      id: "project3",
      name: "Note Taker",
      description: "An app that can be used to write, save, and delete notes.",
      skills: ["HTML, CSS, JS, Express.js,"],
      url: "https://github.com/chergul/Note-Taker",
    },
    {
      id: "project4",
      name: "My Atmos Project",
      description: "Atmos allows a user to choose a genre of music that they are in the mood for along with searching visuals they would like to see.",
      skills: ["HTML, CSS, JS, API's"],
      url: "https://github.com/chergul/atmos-project",
    },
    {
      id: "project5",
      name: "Workout Tracker",
      description: "When the user loads the web page, they should see the workout tracker with an option to create a new workout, or continue with their last workout.",
      skills: ["HTML, CSS, JS, NoSQL"],
      url: "https://github.com/chergul/Workout-Tracker-NoSQL",
    },
    {
      id: "project6",
      name: "Employee Tracker",
      description: "This application uses the node package Inquirer to ask you questions, and display requested information as well. You can add, delete or view employees through your terminal. You can also submit informagtion departments and roles.",
      skills: ["MySQL, Express.js"],
      link: "https://github.com/chergul/employee-tracker",
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
    "Let's meet, talk about a project or a collaboration, or just say hi. Simply fill the from and send me an email.",
  copyright: "Ceyda H. Hergul",
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