const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const about = {text: "Hi, I'm Bernard, a student in Software Engineering at the UTBM looking for an end-year internship in Software Engineering anywhere in France."};

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "", label: "Completed internships" },
    { value: 5, suffix: "+", label: "Completed web projects" },
    { value: 5, suffix: "+", label: "Programming languages mastered" },
    { value: 4, suffix: "", label: "Languages spoken" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/linux.png",
    },
    {
        imgPath: "/images/logos/kibana.png",
    },
    {
        imgPath: "/images/logos/redmine.png",
    },
    {
        imgPath: "/images/logos/git.svg",
    },
    {
        imgPath: "/images/logos/github.png",
    },
    {
        imgPath: "/images/logos/node.png",
    },
    {
        imgPath: "/images/logos/virtualbox.png",
    },
    {
        imgPath: "/images/logos/docker.png",
    },


];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: ".NET",
        imgPath: "/images/logos/dotnet.webp",
    },
    {
        name: "C#",
        imgPath: "/images/logos/csharplogo.png",
    },
    {
        name: "SpringBoot",
        imgPath: "/images/logos/spring-boot.jpg",
    },
    {
        name: "Java",
        imgPath: "/images/logos/java.png",
    },
    {
        name: "HTML",
        imgPath: "/images/logos/html.png",
    },
    {
        name: "CSS",
        imgPath: "/images/logos/css.png",
    },
    {
        name: "JavaScript",
        imgPath: "/images/logos/js.png",
    },
    {
        name: "PHP",
        imgPath: "/images/logos/php.png",
    },

    {
        name: "Python",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "C",
        imgPath: "/images/logos/c.png",
    },
];

const techStackIcons = [
    {
        name: ".NET",
        modelPath: "/images/logos/js.png",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "C#",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Spring Boot",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Java",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "HTML/CSS/JS",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Angular",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "As a member of the Software Development Center’s EOMR team at Arabelle Solutions, I worked on enhancing and building new features for an existing application. This experience not only strengthened my technical skills but also taught me how to collaborate effectively with a team through GitHub, making teamwork an essential part of my development journey.",
        imgPath: "images/logos/arabellesolutions.png",
        title: "Software Engineering Intern",
        date: "February 2025 - July 2025",
        responsibilities: [
            "Analysis of an existing application",
            "Creation of an interface in a new module, respecting the constraints of the service reviewed with client users ",
        ],
    },
    {
        review: "As a full stack developer at BIA (International Bank of Attijariwafa), I built a banking authorization management system.",
        imgPath: "/images/logos/bia.png",
        title: "Full Stack Junior Developer intern",
        date: "May 2023 - August 2023",
        responsibilities: [
            "Participated in understanding and analyzing internal customer needs",
            "Developed and tested new features of the application",
            "Created clear documentation to support the project",
            "Trained users to ensure effective adoption of the application"
        ],
    },
    {
        review: "As a backend developer at Attijariwafa, I built an express points management system",
        imgPath: "/images/logos/bia.png",
        title: "Backend Developer intern",
        date: "June 2022 - August 2022",
        responsibilities: [
            "Developed a backend for an express points management system, enabling remote transactions at partner stores.",
            "Increased customer accessibility by integrating banking services into local retail locations.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "x",
        imgPath: "/images/x.png",
        link: "https://x.com/x",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/kokou-venunye-bernard-sogbo-262a73256/",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    about,
};