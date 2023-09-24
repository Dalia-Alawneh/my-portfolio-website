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
    figma,
    docker,
    meta,
    dimentions,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    noimage,
    knowledge_academy,
    eduma,
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
        title: "Front End Developer | Node js Lecturer | Training and Mentor Team Leader",
        company_name: "Knowledge Academy",
        icon: knowledge_academy,
        iconBg: "#E6DEDD",
        date: "May 2022 - present",
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
            "Front end online courses template",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: eduma,
        source_code_link: "https://github.com/Dalia-Alawneh/Eduma",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };