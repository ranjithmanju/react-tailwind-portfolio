// Import images

import TMImage1 from "../images/Task management images-1.webp"
import TMImage2 from "../images/task management image-2.png"
import TMImage3 from "../images/Task management images-3.jpeg"

import FaadImage1 from "../images/faad-1.png"
import FaadImage2 from "../images/faad-2.jpeg"
import FaadImage3 from "../images/faad-3.png"

import TrillecoImage1 from "../images/trilleco-1.jpeg"
import TrillecoImage2 from "../images/trilleco-2.jpeg"
import TrillecoImage3 from "../images/trilleco-3.jpeg"

import AdxImage1 from "../images/adx-1.jpg"
import AdxImage2 from "../images/adx-2.jpeg"
import AdxImage3 from "../images/adx-3.jpeg"

import NewtonImage1 from "../images/newton-1.jpeg"
import NewtonImage2 from "../images/newton-2.jpeg"
import NewtonImage3 from "../images/newton-3.jpeg"

import CricketImage1 from "../images/cricket-1.jpeg"
import CricketImage2 from "../images/cricket-2.jpeg"
import CricketImage3 from "../images/cricket-3.jpeg"








// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

export const singleProjectData = [
  {
    id: 1,
    ProjectHeader: {
      title: "Task Management UI",
      publishDate: "mar 26, 2024",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Task Management UI",
        img: TMImage1,
      },
      {
        id: 2,
        title: "Task Management UI",
        img: TMImage2,
      },
      {
        id: 3,
        title: "Task Management UI",
        img: TMImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: " Cloudworx technologies pvt ltd",
        },
        {
          id: 2,
          title: "Services",
          details: " Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: " https://www.cloudworx.ai",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a modern, responsive website using ReactJS, TailwindCSS, and Higher-Order Components (HOCs). ReactJS will provide a robust, component-based architecture for efficient rendering and state management. TailwindCSS will be utilized for rapid, utility-first styling, ensuring a visually appealing and responsive design.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "TailwindCSS",
            "Material UI",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Designed and developed over 10+ dynamic and responsive frontend pages for the studio application using React.js, Material-UI, and Tailwind CSS, resulting in a visually appealing and user-friendly interface.",
        },
        {
          id: 2,
          details:
            "Programmed higher-order components (HOCs) to significantly improve code reusability and maintainability, enhancing overall development efficiency and reducing repetitive code. Utilized Git for version control, ensuring smooth collaboration and efficient project management.",
        },
        {
          id: 3,
          details:
            "Integrated RESTful APIs for handling GLB files on AWS S3 using Node.js and Express.js, ensuring seamless file management and optimized performance. Collaborated with cross-functional teams to optimize application performance, resulting in a 20% reduction in load times.",
        },
        {
          id: 4,
          details:
            "Identified and resolved critical bugs within the application codebase, significantly reducing product downtime and enhancing application stability and user experience. Implemented responsive design principles ensuring a seamless user experience across all devices and screen sizes.Conducted comprehensive code reviews and pair programming sessions to maintain code quality and share knowledge among team members.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
  {
    id: 2,
    ProjectHeader: {
      title: "FAAD Network UI",
      publishDate: "June 20, 2022",
      tags: "Frontend / Backend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "FAAD Network UI",
        img: FaadImage1,
      },
      {
        id: 2,
        title: "FAAD Network UI",
        img: FaadImage2,
      },
      {
        id: 3,
        title: "FAAD Network UI",
        img: FaadImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "FAAD Network",
        },
        {
          id: 2,
          title: "Services",
          details: "Full stack Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.faad.in/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a robust and scalable web application leveraging Vue.js for a dynamic and responsive frontend experience. Utilize Node.js and Express.js to create a powerful backend server, seamlessly integrating MongoDB for efficient data storage and retrieval. Implement JavaScript to enhance interactivity and client-side functionality, ensuring a smooth and intuitive user experience. Focus on building modular and maintainable code to facilitate future enhancements and scalability of the application.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["JavaScript", "Vue.js", "Node.js", "Express.js", "Nuxt.js"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Created an intuitive Nuxt.js frontend design across 20+ pages for web and mobile platforms, ensuring a seamless user experience across devices. Developed animations for user interfaces using Lottie Files and CSS to enhance UI/UX design, significantly improving overall user engagement.",
        },
        {
          id: 2,
          details:
            "Collaborated with backend engineers to optimize code and reduce latency, integrating APIs efficiently into the application for faster load times. Implemented RESTful APIs with Node.js and Express.js to handle dynamic data operations, improving application responsiveness and data integrity. Utilized Vue.js to develop modular components, enhancing code reusability and maintainability, resulting in a more scalable application architecture.",
        },
        {
          id: 3,
          details:
            "Integrated MongoDB for efficient data storage and retrieval, enabling real-time data updates and robust performance. Leveraged Vue Router to implement seamless client-side routing, providing users with a smooth navigation experience. Applied Vuex for state management, ensuring consistent data flow across the application and simplifying complex state interactions.",
        },
        {
          id: 4,
          details:
            "Conducted thorough testing and debugging using Jest and Mocha to ensure high-quality code and minimize production issues. Designed and implemented secure authentication and authorization mechanisms using JWT, enhancing the application’s security. Optimized frontend performance through lazy loading and code splitting, reducing initial load times and enhancing user experience. Employed modern JavaScript (ES6+) features to write clean, efficient, and maintainable code, improving overall development productivity.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: "Trilleco Application UI",
      publishDate: "March 05, 2023",
      tags: "Frontend / Backend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Trilleco UI",
        img: TrillecoImage1,
      },
      {
        id: 2,
        title: "Trilleco UI",
        img: TrillecoImage2,
      },
      {
        id: 3,
        title: "Trilleco UI",
        img: TrillecoImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Trilleco",
        },
        {
          id: 2,
          title: "Services",
          details: "Full stack Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.trilleco.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Developed a full-stack web application with React.js and Node.js/Express.js, providing a seamless user experience. Implemented RESTful APIs and integrated MongoDB for efficient data handling and storage. Utilized modern JavaScript (ES6+) and React Context for maintainable and efficient code.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "HTML",
            "CSS",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Enabled and managed a comprehensive set of customized charts in FusionCharts, providing the team with a versatile and visually impactful toolkit for data visualization. Implemented robust authentication mechanisms, including login, signup, logout, and password recovery (via email link), enhancing user security and experience.",
        },
        {
          id: 2,
          details:
            "Collaborated with cross-functional teams to design and implement a scalable microservices architecture using Node.js and Express.js, ensuring efficient service management and deployment. Designed and developed over 10+ frontend pages for the application using React.js, Material-UI, and Tailwind CSS, creating a responsive and intuitive user interface. Programmed higher-order components (HOCs) to improve code reusability, maintainability, and overall development efficiency.",
        },
        {
          id: 3,
          details:
            "Integrated RESTful APIs for dynamic data operations and improved application responsiveness. Utilized MongoDB for efficient data storage and management, ensuring scalability and performance. Identified and resolved critical bugs within the application codebase, significantly reducing product downtime.",
        },
        {
          id: 4,
          details:
            "Implemented modern JavaScript (ES6+) and React Context for maintainable and efficient code. Enhanced UI/UX design by developing animations for user interfaces, improving overall user experience. Collaborated with backend engineers to optimize code and reduce latency, integrating APIs into the application for seamless functionality. Conducted thorough testing and debugging to ensure the highest quality of code and application performance.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
  {
    id: 4,
    ProjectHeader: {
      title: "ADX Project UI",
      publishDate: "March 05, 2023",
      tags: "Frontend ",
    },
    ProjectImages: [
      {
        id: 1,
        title: "ADX UI",
        img: AdxImage1,
      },
      {
        id: 2,
        title: "ADX UI",
        img: AdxImage2,
      },
      {
        id: 3,
        title: "ADX UI",
        img: AdxImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Cloudworx Technologies",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.cloudworx.ai/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a responsive and dynamic web application using ReactJS, HTML, CSS, and JavaScript. Create an intuitive user interface with seamless navigation and robust functionality, ensuring cross-browser compatibility and optimal performance. Integrate modern JavaScript practices and React hooks to enhance user experience and maintainability.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["JavaScript", "React.js", "HTML", "CSS", "Lottie Files"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed a dynamic and responsive web application using ReactJS, ensuring a seamless user experience across various devices and browsers. Designed and implemented user-friendly interfaces using HTML, CSS, and JavaScript, focusing on usability and accessibility.",
        },
        {
          id: 2,
          details:
            "Optimized the application's performance by using React hooks and state management libraries, leading to faster load times and smoother interactions. Integrated Lottie animations to create engaging and interactive UI components, enhancing the overall user experience. Implemented advanced CSS techniques, including Flexbox and Grid, to create complex layouts that are both flexible and maintainable.",
        },
        {
          id: 3,
          details:
            "Utilized JavaScript ES6+ features to write clean, efficient, and modular code, improving the maintainability of the codebase. Created reusable React components, promoting code reusability and reducing development time for future projects. Collaborated with designers to translate design mockups into high-quality code, ensuring the final product matched the envisioned design.",
        },
        {
          id: 4,
          details:
            "Conducted thorough testing using tools like Jest and React Testing Library to ensure the application was robust and free of critical bugs. Implemented responsive design principles to ensure the application was fully functional on both desktop and mobile devices. Integrated RESTful APIs to handle dynamic data operations, ensuring efficient and secure data communication between the frontend and backend. Maintained version control using Git, facilitating smooth collaboration with team members and efficient project management.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
  {
    id: 5,
    ProjectHeader: {
      title: "Newton Base Application UI",
      publishDate: "Sept 10, 2023",
      tags: "Frontend ",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Newton Base UI",
        img: NewtonImage1,
      },
      {
        id: 2,
        title: "Newton Base UI",
        img: NewtonImage2,
      },
      {
        id: 3,
        title: "Newton Base UI",
        img: NewtonImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Cloudworx Technologies",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.cloudworx.ai/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Developed a responsive web application using Vue.js, HTML, and CSS, enhancing user engagement with interactive Lottie animations. Implemented secure login functionality, including signup, authentication, and password reset, ensuring a seamless user experience.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["JavaScript", "Vue.js", "HTML", "CSS", "Lottie Files"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed and maintained a responsive web application using Vue.js, ensuring seamless user experiences across various devices and platforms. Implemented intricate animations with Lottie files and CSS to enhance the visual appeal and interactivity of the user interface. Designed and structured comprehensive HTML layouts, adhering to semantic standards for better accessibility and SEO.",
        },
        {
          id: 2,
          details:
            "Crafted custom CSS stylesheets, ensuring consistency and a modern aesthetic throughout the application. Optimized performance and load times by leveraging modern JavaScript techniques and Vue.js's reactivity system. Built and integrated login functionality, including user authentication, registration, password recovery, and secure session management.",
        },
        {
          id: 3,
          details:
            "Utilized Vue Router to manage dynamic navigation and ensure a smooth, single-page application experience. Collaborated with backend developers to integrate RESTful APIs, enabling dynamic content and real-time data updates. Employed state management solutions such as Vuex to maintain a centralized and predictable application state.",
        },
        {
          id: 4,
          details:
            "Conducted thorough testing and debugging of HTML, CSS, and JavaScript code to ensure cross-browser compatibility and robustness. Enhanced user interface components with reusable Vue.js components, improving maintainability and development efficiency. Implemented form validations and error handling to ensure secure and user-friendly interactions during login and registration processes.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
  {
    id: 6,
    ProjectHeader: {
      title: "Score Board Application UI",
      publishDate: "Sept 02, 2021",
      tags: "Frontend ",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Score Board UI",
        img: CricketImage1,
      },
      {
        id: 2,
        title: "Score Board UI",
        img: CricketImage2,
      },
      {
        id: 3,
        title: "Score Board UI",
        img: CricketImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "AUROTEC",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend",
        },
        {
          id: 3,
          title: "Website",
          details: "www.aurotec.co",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Developing a comprehensive cricket scoreboard application using Java for backend logic and JavaScript, HTML, and CSS for frontend development. Implementing real-time score updates, player statistics, and match details to provide a user-friendly interface. Integrating responsive design principles and interactive features to enhance user engagement and usability.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["JavaScript", "HTML", "Java", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Implemented real-time updates and live scores, providing cricket enthusiasts with up-to-date match information and detailed player statistics. Developed a responsive cricket scoreboard application using Java for backend logic and JavaScript, HTML, and CSS for frontend development. Designed an admin dashboard enabling CRUD operations for user management, ensuring efficient administration of user data.",
        },
        {
          id: 2,
          details:
            "Utilized React component-based architecture to create modular and reusable UI components, enhancing code maintainability and scalability. Integrated Tailwind CSS utility classes to style components, ensuring a streamlined and consistent user interface across the application. Implemented authentication features, including login, signup, and password management, to secure user accounts and enhance data protection.",
        },
        {
          id: 3,
          details:
            "Developed custom icon components and higher-order components (HOCs) to optimize code reusability and improve application performance. Designed and implemented custom search filters to facilitate easy navigation and retrieval of specific match or player information.",
        },
        {
          id: 4,
          details:
            "Incorporated profile view functionality allowing users to manage and customize their personal information and preferences. Collaborated with cross-functional teams to ensure seamless integration of backend APIs, enhancing application functionality and responsiveness. Conducted thorough testing and debugging to identify and resolve issues, ensuring a robust and error-free application for users.",
        },
        ,
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/ranjithroman88/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://www.linkedin.com/in/ranjithk30694/",
        },
      ],
    },
  },
];
