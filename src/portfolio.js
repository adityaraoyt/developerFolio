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
  username: "Aditya",
  title: "Hello World!, I'm Aditya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adityaraoyt",
  linkedin: "https://www.linkedin.com/in/aditya-rao-dev/",
  gmail: "avrao1890@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE FULL STACK DEVELOPER OBSESSED WITH BUILDING SMARTER TECH",
  skills: [
    emoji(
      "⚡ Build AI-powered apps and end-to-end ML pipelines"
    ),
    emoji("⚡ Design fast, secure, and scalable back-end systems"),
    emoji(
      "⚡ Craft sleek, responsive, and user-friendly interfaces"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const currentWork = {
  title: "What I'm Currently Working On",
  subTitle: "ACTIVE PROJECTS AND RESEARCH INITIATIVES",
  skills: [
    emoji(
      "🤖 Building Automation Workflows and integrating them with existing LLM applications"
    ),
    emoji(
      "🧠 Researching advanced finetuning techniques for improved text-to-image and text-to-video generation"
    )
  ],
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University University",
      logo: require("./assets/images/Arizona_State_University_seal.svg.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Worked on building a university wide AI platform",
      descBullets: [
        "Recorded and edited videos for various student organizations",
        "Helped plan and organize events hosted by ISSC and PAB at ASU"
      ]
    },
    {
      schoolName: "Maharashtra Institute of Technology",
      logo: require("./assets/images/mit.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - June 2022",
      desc: "Worked on research in the fields of image and video analysis using AI",
      descBullets: ["Helped plan and organize events through E-Cell"]
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
      progressPercentage: "75%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD",
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
      role: "AI Full Stack Developer",
      company: "Arizona State University",
      companylogo: require("./assets/images/Arizona_State_University_seal.svg.png"),
      date: "August 2024 – Present",
      desc: "Built scalable APIs with AWS Lambda and DynamoDB, reducing response time by 45%, and led a UI/UX redesign, boosting accessibility by 35% and concurrent user handling capacity by 30%.",
    },
    {
      role: "ML Intern",
      company: "DaveAI",
      companylogo: require("./assets/images/dave.jpg"),
      date: "May 2024 – Aug 2024",
      desc: "Developed a containerized text-to-video pipeline with 35% faster generation, 95% lip-sync accuracy, and 60% enhanced video quality using ESRGAN."
    },
    {
      role: "Associate Software Engineer",
      company: "UST",
      companylogo: require("./assets/images/ust.cms"),
      date: "July 2022 – June 2023",
      desc: "Optimized server-side functionalities for 60% faster data retrieval, achieved 80% test coverage, minimized code duplication to 2%, and streamlined Agile development workflows."
    },
    {
      role: "Software Intern",
      company: "Jindal Steel and Power",
      companylogo: require("./assets/images/Jindal_logo_and_steel_power.jpg"),
      date: "March 2021 - June 2021",
      desc: "Created a Node.js chatbot with Google Dialogflow, reducing manual labor by 20%, and integrated it with Hangouts and Telegram for seamless employee data access."
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
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I'VE WORKED ON OVER THE YEARS",
  projects: [
    {
      image: require("./assets/images/websocketflow.png"),
      projectName: "Websocket Flow",
      projectDesc: "An interactive chat flow interface where users can communicate with AI models through a visual graph of connected nodes, with each node representing either a human input or an AI response, connected via WebSocket for real-time communication.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adityaraoyt/websocket-flow"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rag_enabled_email_automation.png"),
      projectName: "RAG-enabled Email Automation",
      projectDesc: "Sends out follow up AI generated emails automatically on a periodic basis",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adityaraoyt/RAG-Enabled-Email-Automation"
        }
      ]
    },
    {
      image: require("./assets/images/data_visualization.png"),
      projectName: "Blockchain Data Visualization",
      projectDesc: "An interactive blockchain explorer that visualizes over 10,000 transactions and market trends to make blockchain data more intuitive and accessible",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adityaraoyt/BlockchainVis"
        }
      ]
    },
    {
      image: require("./assets/images/chatbot.png"),
      projectName: "Empathetic Response Generating Chatbot",
      projectDesc: "An empathetic chatbot that analyzes user emotions and generates personalized, supportive responses to promote mental well-being",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adityaraoyt/Empathetic-response-generating-chatbot"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "avrao1890@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "titumamaYT", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  currentWork,
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
  isHireable,
  resumeSection
};
