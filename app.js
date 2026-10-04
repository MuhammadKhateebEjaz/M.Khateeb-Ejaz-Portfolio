
/* =========================================================
   MUHAMMAD KHATEEB EJAZ PORTFOLIO
   ========================================================= */


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");


const typingWords = [

    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "React / Next.js Developer",
    "UI/UX Designer",
    "AI-Assisted Builder"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    if (!typingElement) return;


    const currentWord =
        typingWords[wordIndex];


    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    let speed =
        deleting ? 45 : 75;


    if (
        !deleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1300;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1)
            % typingWords.length;

        speed = 300;

    }


    setTimeout(
        typingEffect,
        speed
    );

}


typingEffect();



/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuBtn");


const navigation =
    document.getElementById("navMenu");


menuButton.addEventListener(
    "click",
    function () {

        navigation.classList.toggle(
            "open"
        );


        if (
            navigation.classList.contains(
                "open"
            )
        ) {

            menuButton.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        }

        else {

            menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    }
);



/* Close menu after clicking link */

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "open"
                );

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }
        );

    });



/* ================= HEADER ================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 40
        ) {

            header.classList.add(
                "scrolled"
            );

        }

        else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        }

        else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================================
   PROJECTS
   ========================================================= */


/*
   IMPORTANT:

   Yahan apne 70+ REAL PROJECTS add karne hain.

   Har project ka format:

   {
       title: "Project Name",

       category: "web",

       description:
           "Project description",

       tech: [
           "HTML",
           "CSS",
           "JavaScript"
       ],

       live:
           "https://your-live-site.com",

       github:
           "https://github.com/your-repo"
   }

*/


const projects = [

    /* ================= PROJECT 01 ================= */

    {

        title:
            "Building The Future Of Marketing... AI Social Media Automation Platform Coming Soon! 🚀",

        category:
            "ai",

        description:
            "An AI-powered social media automation platform designed for seamless content uploading, smart caption generation, scheduling, and performance analytics. Coming Soon! 🚀.",

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


    /* ================= PROJECT 02 ================= */

    {

        title:
            "Building The Ultimate Platform... Earn With Lashkar Coming Soon! 💻✨",

        category:
            "fullstack",

        description:
            "Building The Ultimate Platform... Earn With Lashkar Coming Soon! 💻✨ An AI-powered tool designed for seamless content uploading, smart caption generation, scheduling, and performance analytics.",

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


    /* ================= PROJECT 03 ================= */

    {

        title:
            "🤖AI-Powered Todo Assistant | Smart Task Management | UI Upgrade Coming Soon",

        category:
            "ai",

        description:
            "A modern task management app integrated with an AI chatbot. Core functionality is fully built and working; a stunning new UI/UX upgrade is coming soon! 🚀",

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


    /* ================= PROJECT 04 ================= */

    {

        title:
            "📄 Client Agreement Portal | Web Development Contract & PDF Generator",

        category:
            "web",

        description:
            "A sleek, web-based contract portal where clients can fill out project requirements, review pricing/terms, and instantly download a PDF agreement. Core system is fully functional; final UI upgrades in progress! 🚀",

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


    /* ================= PROJECT 05 ================= */

    {

        title:
            "🔄 Google Unit Converter App | Streamlit & Web Utility | UI Upgrade Coming Soon 🚀",

        category:
            "ui",

        description:
            "A functional Python-based unit conversion app featuring category selection, dynamic From/To unit fields, value input, and instant conversions. The core conversion logic is fully built and working, while a modern UI/UX redesign is currently in progress.",

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


    /* ================= PROJECT 06 ================= */

    {

        title:
            "🛋️ Best Furniture Collection | Interior Store & Catalog",

        category:
            "web",

        description:
            "A stylish furniture showcase and interior collection web platform featuring elegant layouts, category browsing, and product display for modern home styling. Fully working and live in action; a modern UI/UX upgrade is also currently in progress! 🚀",

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


    /* ================= PROJECT 07 ================= */

    {

        title:
            "🛍️ Noor Online Shopping | E-Commerce & Store Platform",

        category:
            "web",

        description:
            "A feature-rich e-commerce store platform featuring category browsing, interactive Add to Cart functionality, cart management, direct WhatsApp order checkout, and delivery options. Core store logic is fully built; a modern UI/UX upgrade is currently in progress! 🚀",

        tech:
            [
        "HTML",
        "CSS",
        "UI",
        "JavaScript",
        "React",
        "Add to Cart System",
        "WhatsApp Checkout"
            ],

        live:
            "https://the-noor-online-shopping-store.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/The-Noor-Online-Shopping-Store"

    },


    /* ================= PROJECT 08 ================= */

    {

        title:
            " 🎓📚 Learn With Babar | Govt Jobs Prep Academy (Client Project - Pending Review) ",

        category:
            "fullstack",

        description:
            "An educational platform designed for government job test preparation, featuring study materials, practice tests, and guidance. Core platform logic is fully built; an enhanced UI/UX redesign is currently in progress! 🚀 client's side.",

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


    /* ================= PROJECT 09 ================= */

    {

        title:
            "📚 Personal Library Manager | Streamlit App",

        category:
            "ui",

        description:
            "A Python and Streamlit-based library management app featuring Add Book, View All Books, Search Book, and Remove Book functionalities. Core app logic is fully built and working; UI/UX enhancements are currently in progress! 🚀",

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
/* ================= PROJECT 10 ================= */

    {

        title:
            "💿 Data Sweeper — File Transformation & Cleaning Tool",

        category:
            "ui",

        description:
            "Transform your files between CSV and Excel formats with built-in data cleaning and visualization[cite: 2]. Core functionality is fully built and working; a modern UI/UX upgrade is currently in progress! 🚀",

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

 /* ================= PROJECT 11 ================= */

    {

        title:
            "🛍️ Uzma Enterprise Shopping Store | E-Commerce Platform (Client Project - Pending Review)",

        category:
            "web",

        description:
            "A Python and Streamlit-based library management app featuring Add Book, View All Books, Search Book, and Remove Book functionalities. Core app logic is fully built and working; UI/UX enhancements are currently in progress! 🚀",

        tech:
            [
          "HTML",
        "CSS",
        "UI",
        "JavaScript",
        "React",
        "Add to Cart System",
        "WhatsApp Checkout"
            
               
            ],

        live:
            "https://uzma-enterprices-shopping-store.vercel.app",

        github:
            "https://github.com/MuhammadKhateebEjaz/"

    }, 
    /* ================= PROJECT 12 ================= */

    {

        title:
            "🔐 Password Strength Meter | Security Tool",

        category:
            "ui",

        description:
            "A smart security utility that analyzes password strength in real-time, evaluating complexity and providing instant feedback to create secure passwords. Core logic is fully functional; UI redesign is currently in progress! 🚀",

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



/* ================= PROJECT DISPLAY ================= */

const projectGrid =
    document.getElementById(
        "projectGrid"
    );


const projectCounter =
    document.getElementById(
        "projectCounter"
    );



function displayProjects(
    selectedCategory = "all"
) {


    let filteredProjects;


    if (
        selectedCategory === "all"
    ) {

        filteredProjects =
            projects;

    }

    else {

        filteredProjects =
            projects.filter(
                function (project) {

                    return (
                        project.category ===
                        selectedCategory
                    );

                }
            );

    }


    projectGrid.innerHTML = "";



    filteredProjects.forEach(
        function (project, index) {


            let icon =
                "fa-globe";


            if (
                project.category ===
                "ai"
            ) {

                icon =
                    "fa-robot";

            }


            if (
                project.category ===
                "fullstack"
            ) {

                icon =
                    "fa-layer-group";

            }


            if (
                project.category ===
                "ui"
            ) {

                icon =
                    "fa-pen-ruler";

            }



            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-top">

                    <div class="project-icon">

                        <i class="fa-solid ${icon}"></i>

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
                        >

                            Live Demo

                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>


                        <a
                            href="${project.github}"
                            target="_blank"
                        >

                            GitHub

                            <i class="fa-brands fa-github"></i>

                        </a>

                    </div>

                </div>

            `;


            projectGrid.appendChild(
                card
            );

        }
    );



    projectCounter.innerText =
        `Showing ${filteredProjects.length} of ${projects.length} listed projects`;

}



displayProjects();



/* ================= PROJECT FILTERS ================= */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const category =
                    button.dataset.filter;


                displayProjects(
                    category
                );

            }
        );

    }
);



/* ================= CURRENT YEAR ================= */

document.getElementById(
    "year"
).innerText =
    new Date().getFullYear();
