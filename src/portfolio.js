/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pamilerin Olayiwola",
  title: "Hi all, I'm Wunmicrown ",
  subTitle: emoji(
    "Full stack developer 🚀with 1+ year experience in web development and software architecture. Highly skilled in critical thinking to producing suitable algorithm that proffer solutions to a task and able to collaborate with others to accomplish a shared goals."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wunmicrown",
  linkedin: "https://www.linkedin.com/in/pamilerin-olayiwola-1b5005288/",
  gmail: "olayiwolapamilerin34@gmail.com",
  gitlab: "https://gitlab.com/wunmicrown",
  facebook: "https://www.facebook.com/wunmi.crown.33",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SQI College of ICT",
      logo: require("./assets/images/sqi.logo.png"),
      subHeader: "",
      duration: "July 2023 Present",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Hulu Streaming Technologies",
      companylogo: require("./assets/images/hulu-img.jpg"),
      date: "July 2023 – Present",
    },
    {
      role: "Software Developer",
      company: "SQI College of ICT",
      companylogo: require("./assets/images/sqi.logo.png"),
      date: "July 2023 – Present",
    }
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  projects: [
    {
      image: require("./assets/images/elegant-home-screen.jpg"),
      projectName: "Phone Project",
      projectDesc: "using of javascript and bostrap with loaclstorage",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://phone-project-eight.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/github-inteface.png"),
      projectName: "FOR MORE PROJECTS",
      footerLink: [
        {
          name: "MORE PROJECTS",
          url: "https://github.com/wunmicrown"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [

   

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {
  //         name: "Final Project",
  //         url: "https://wunmicrown.github.io/printinvo/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "09128307441",
  email_address: "olayiwolapamilerin34@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
