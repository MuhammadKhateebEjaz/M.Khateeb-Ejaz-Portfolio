/* =========================================================
   MUHAMMAD KHATEEB EJAZ PORTFOLIO
   Premium Portfolio JavaScript
========================================================= */


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const typingWords = [
    "Web Developer",
    "Front-End Developer",
    "React / Next.js Developer",
    "UI/UX Designer",
    "AI-Assisted Builder"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 45 : 75;

    if (
        !deleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1300;
        deleting = true;

    } else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) % typingWords.length;

        speed = 300;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navMenu");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const isOpen =
            navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    /* Close menu after clicking navigation link */

    document
        .querySelectorAll("#navMenu a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });


    /* Close menu with Escape key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop = document.getElementById("backTop");

if (backTop) {

    function updateBackTop() {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        updateBackTop,
        { passive: true }
    );

    updateBackTop();


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   PROJECTS
========================================================= */

const projects = [

    {
        title:
            "Building The Future Of Marketing... AI Social Media Automation Platform Coming Soon! 🚀",

        category:
            "ai",

        description:
            "An AI-powered social media automation platform designed for seamless content uploading, smart caption generation, scheduling, and performance analytics. Coming Soon! 🚀",

        tech:
            [
                "Next.js",
                "AI",
                "APIs"
            ],

        live:
            "https://ai-social-automation-with-lashkars.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/ai-social-automation-with-lashkars"
    },


    {
        title:
            "Building The Ultimate Platform... Earn With Lashkar Coming Soon! 💻✨",

        category:
            "fullstack",

        description:
            "An AI-powered platform designed for content management, smart automation, scheduling, analytics, and administrative workflows.",

        tech:
            [
                "Next.js",
                "Firebase",
                "Admin"
            ],

        live:
            "https://earn-with-lashkar.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/earn-with-lashkar"
    },


    {
        title:
            "🤖 AI-Powered Todo Assistant | Smart Task Management",

        category:
            "ai",

        description:
            "A modern task management application integrated with an AI chatbot for smart task interaction and productivity workflows.",

        tech:
            [
                "Next.js",
                "AI",
                "Chatbot"
            ],

        live:
            "https://hackathon-ii-phase-iii-todo-ai-chat.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Hackathon-II-Phase-III-Todo-AI-Chatbot"
    },


    {
        title:
            "📄 Client Agreement Portal | Contract & PDF Generator",

        category:
            "web",

        description:
            "A web-based client agreement portal where project requirements, pricing, and terms can be organized into a downloadable PDF agreement.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "PDF Generator"
            ],

        live:
            "https://client-agreement-portal.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz"
    },


    {
        title:
            "🔄 Google Unit Converter App | Streamlit Utility",

        category:
            "ui",

        description:
            "A Python-based unit conversion application featuring category selection, dynamic unit fields, value input, and instant conversion.",

        tech:
            [
                "Python",
                "Streamlit"
            ],

        live:
            "https://project02-unit-convertor-app-u9ndtscsz4hvlveszu7jm9.streamlit.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Project_02-Unit-Convertor-App"
    },


    {
        title:
            "🛋️ Best Furniture Collection | Interior Store & Catalog",

        category:
            "web",

        description:
            "A stylish furniture showcase and interior collection website featuring category browsing, product presentation, and modern home styling layouts.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Figma Design"
            ],

        live:
            "https://figma-nine-green.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Figma-Template-8"
    },


    {
        title:
            "🛍️ Noor Online Shopping | E-Commerce Store",

        category:
            "web",

        description:
            "An e-commerce platform featuring category browsing, Add to Cart functionality, cart management, WhatsApp ordering, and delivery options.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Add to Cart",
                "WhatsApp Checkout"
            ],

        live:
            "https://the-noor-online-shopping-store.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/The-Noor-Online-Shopping-Store"
    },


    {
        title:
            "🎓📚 Learn With Babar | Govt Jobs Prep Academy",

        category:
            "fullstack",

        description:
            "An educational platform designed for government job test preparation with study material, practice tests, guidance, and administrative functionality.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Database",
                "Admin Panel"
            ],

        live:
            "https://learn-with-babar-govtjobsprep-academy.netlify.app",

        github:
            "https://github.com/MuhammadKhateebEjaz"
    },


    {
        title:
            "📚 Personal Library Manager | Streamlit App",

        category:
            "ui",

        description:
            "A Python and Streamlit library management application featuring Add Book, View Books, Search Book, and Remove Book functionality.",

        tech:
            [
                "Python",
                "Streamlit"
            ],

        live:
            "https://project04personal-library-manager-mp9wqx9z4r9wttmyaahk8n.streamlit.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Project_04_Personal-Library-Manager"
    },


    {
        title:
            "💿 Data Sweeper — File Transformation & Cleaning Tool",

        category:
            "ui",

        description:
            "A file transformation and data cleaning tool supporting CSV and Excel workflows with data processing and visualization features.",

        tech:
            [
                "Python",
                "Streamlit"
            ],

        live:
            "https://muhammadkhateebejaz-growth-mindset-challe-file-converter-lfxgpj.streamlit.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Growth-Mindset-Challenge-Web-App-With-Giaic-Quarter-3-Project-1-"
    },


    {
        title:
            "🛍️ Uzma Enterprise Shopping Store | E-Commerce Platform",

        category:
            "web",

        description:
            "An e-commerce shopping platform featuring product presentation, Add to Cart functionality, and WhatsApp-based ordering workflows.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Add to Cart",
                "WhatsApp Checkout"
            ],

        live:
            "https://uzma-enterprices-shopping-store.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/"
    },


    {
        title:
            "🔐 Password Strength Meter | Security Tool",

        category:
            "ui",

        description:
            "A security utility that analyzes password strength in real time and provides feedback based on password complexity.",

        tech:
            [
                "Python",
                "Streamlit"
            ],

        live:
            "https://project03-password-strength-meter-tkj2amappytxviynh4cag8x.streamlit.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/Project_03-Password-Strength-Meter"
    }

];


/* =========================================================
   PROJECT DISPLAY
========================================================= */

const projectGrid =
    document.getElementById("projectGrid");

const projectCounter =
    document.getElementById("projectCounter");


function getProjectIcon(category) {

    const icons = {

        ai:
            "fa-robot",

        fullstack:
            "fa-layer-group",

        ui:
            "fa-pen-ruler",

        web:
            "fa-globe"

    };

    return icons[category] || "fa-globe";
}


function displayProjects(selectedCategory = "all") {

    if (!projectGrid) return;

    const filteredProjects =
        selectedCategory === "all"
            ? projects
            : projects.filter(
                function (project) {

                    return project.category ===
                        selectedCategory;

                }
            );


    projectGrid.innerHTML = "";


    filteredProjects.forEach(
        function (project, index) {

            const icon =
                getProjectIcon(
                    project.category
                );


            const card =
                document.createElement("article");


            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-top">

                    <div class="project-icon">

                        <i
                            class="fa-solid ${icon}"
                            aria-hidden="true"
                        ></i>

                    </div>


                    <span class="project-number">

                        #${String(index + 1).padStart(2, "0")}

                    </span>

                </div>


                <div class="project-body">

                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    <div class="project-meta">

                        ${project.tech.map(

                            function (technology) {

                                return `
                                    <span>
                                        ${technology}
                                    </span>
                                `;

                            }

                        ).join("")}

                    </div>


                    <div class="project-actions">

                        <a
                            href="${project.live}"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open live demo of ${project.title}"
                        >

                            Live Demo

                            <i
                                class="fa-solid fa-arrow-up-right-from-square"
                                aria-hidden="true"
                            ></i>

                        </a>


                        <a
                            href="${project.github}"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub repository of ${project.title}"
                        >

                            GitHub

                            <i
                                class="fa-brands fa-github"
                                aria-hidden="true"
                            ></i>

                        </a>

                    </div>

                </div>

            `;


            projectGrid.appendChild(card);

        }
    );


    if (projectCounter) {

        projectCounter.innerText =
            `Showing ${filteredProjects.length} of ${projects.length} listed projects`;

    }

}


displayProjects();


/* =========================================================
   PROJECT FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove("active");

                    }
                );


                button.classList.add("active");


                const category =
                    button.dataset.filter;


                displayProjects(category);


                /* Smooth scroll on smaller screens */

                if (
                    window.innerWidth <= 700
                ) {

                    const projectsSection =
                        document.getElementById("projects");

                    if (projectsSection) {

                        projectsSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.innerText =
        new Date().getFullYear();

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
