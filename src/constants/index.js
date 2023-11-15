import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    dimentions,
    threejs,
    noimage,
    knowledge_academy,
    eduma,
    aroma,
    cloneportfolio,
    mentor,
    herobiz,
    moviedb,
    movieworld,
    crazygal,
    githubUserSearch,
    productsCrud,
    alerts,
    bagsShop,
    smElectra,
    adviceGenerator,
    quize,
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
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full Stack Lecturer",
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
        name: "TypeScript",
        icon: typescript,
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
];

const experiences = [
    {
        title: "Front End Freelancer | Trainer",
        company_name: "Knowledge Academy",
        icon: knowledge_academy,
        iconBg: "#E6DEDD",
        date: "Oct 2023 - Present",
        points: [
            "JavaScript mid-level course lucturer",
            "Advanced JavaScript Training.",
            "Workshops.",
        ],
    },
    {
        title: "Front End Developer | Node js Lecturer | Training and Mentor Team Leader",
        company_name: "Knowledge Academy",
        icon: knowledge_academy,
        iconBg: "#E6DEDD",
        date: "May 2022 - Oct 2023",
        points: [
            "Developing and maintaining landing web pages.",
            "Front-end training.",
            "Implementing projects with students and workshops.",
            "Creating a weekly report about mentors and trainers and conducting meetings with them.",
        ],
    },
    {
        title: "Front End Freelancer",
        company_name: "",
        icon: noimage,
        iconBg: "#E6DEDD",
        date: "April - July 2023",
        points: [
            "Developing and maintaining a web application for an electronics e-commerce website.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implementing CI/CD using GitHub Actions workflow (Gulp) to minify CSS and uglify JavaScript."
        ],
    },
    {
        title: "Flutter Development Intern",
        company_name: "Dimentions Info Tech",
        icon: dimentions,
        iconBg: "#E6DEDD",
        date: "July - October 2022",
        points: [
            "Developing and maintaining mobile applications using Flutter.",
            "Collaborating with teams and work with other developers to create high-quality products.",
            "Implementing responsive design and ensuring compatibility with other mobile devices.",
            "Dealing with APIs and implementing consistent design templates.",
            "Working on real projects and implementing the design for various screens.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Eduma",
        description:
            "Front End online courses template.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: eduma,
        source_code_link: "https://github.com/Dalia-Alawneh/Eduma",
        projectType:2,
    },
    {
        name: "Bags Shopping Website",
        description:
            "Front End online bags shopping template.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "json-server",
                color: "blue-text-gradient",
            },
        ],
        image: bagsShop,
        source_code_link: "https://github.com/Dalia-Alawneh/bag-shop",
        projectType:2,
    },
    {
        name: "SM Electra E-commerce",
        description:
            "Real Electronics online E-commerce.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: smElectra,
        source_code_link: "https://smelctro.com/ar",
        projectType:2,
    },
    {
        name: "Advice Generator",
        description:
            "Random Advice Generator - Frontend Mentor.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: adviceGenerator,
        source_code_link: "https://github.com/Dalia-Alawneh/advice-generator",
        projectType:2,
    },
    {
        name: "Quize App",
        description:
            "Generate Certificate and Social media share.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: quize,
        source_code_link: "https://github.com/Dalia-Alawneh/advice-generator",
        projectType:2,
    },
    {
        name: "Aroma",
        description:
            "Front End E-commerce project.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "animate css",
                color: "green-text-gradient",
            },
        ],
        image: aroma,
        source_code_link: "https://github.com/Dalia-Alawneh/Aroma-shop-front-end-",
        projectType:1,
    },
    {
        name: "Clone Portfolio",
        description:
            "Implemented with my students.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "jquery",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "pink-text-gradient",
            },
        ],
        image: cloneportfolio,
        source_code_link: "https://github.com/Dalia-Alawneh/clone-portfolio",
        projectType:2,
    },
    {
        name: "GitHub Profile Viewer",
        description:
            "Implemented with my students.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "pink-text-gradient",
            },
        ],
        image: githubUserSearch,
        source_code_link: "https://github.com/Dalia-Alawneh/github-profile-viewer",
        projectType:2,
    },
    {
        name: "Mentor Website",
        description:
            "HTML5, CSS3 responsive template.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            
            
        ],
        image: mentor,
        source_code_link: "https://github.com/Dalia-Alawneh/mentor-website",
        projectType:1,
    },
    {
        name: "Herobiz Website",
        description:
            "Bootstrap template.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
            
        ],
        image: herobiz,
        source_code_link: "https://github.com/Dalia-Alawneh/herobiz-website",
        projectType:1,
    },
    {
        name: "Product CRUD",
        description:
            "React - TypeScript with pure form validation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "headlessUI",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindCss",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            
        ],
        image: productsCrud,
        source_code_link: "https://github.com/Dalia-Alawneh/products-crud-react-typescript",
        projectType:3,
    },
    {
        name: "Alerts",
        description:
            "Alerts React Project",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindCss",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            
        ],
        image: alerts,
        source_code_link: "https://github.com/Dalia-Alawneh/react-ts-alerts-app",
        projectType:3,
    },
    {
        name: "Movies world",
        description:
            "React js movie api and jwt auth and formik.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
            
        ],
        image: movieworld,
        source_code_link: "https://github.com/Dalia-Alawneh/react-app-formik-yup-jwt-movie-api",
        projectType:3,
    },
    {
        name: "Movies App",
        description:
            "Dynamic React js application with movie api.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
            
        ],
        image: moviedb,
        source_code_link: "https://github.com/Dalia-Alawneh/Noxs",
        projectType:3,
    },
    {
        name: "Crazy Gallary",
        description:
            "Dynamic Next js application with albums api.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
            
        ],
        image: crazygal,
        source_code_link: "https://github.com/Dalia-Alawneh/crazy-gallary-next-js-api",
        projectType:4,
    },

];

export { services, technologies, experiences, testimonials, projects };