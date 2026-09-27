
/* =========================================================
   MUHAMMAD KHATEEB EJAZ PORTFOLIO
   ========================================================= */


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");


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
            "AI Social Media Automation Platform",

        category:
            "ai",

        description:
            "AI-powered social media automation platform concept for content uploading, captions, scheduling and analytics.",

        tech:
            [
                "Next.js",
                "AI",
                "APIs"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 02 ================= */

    {

        title:
            "Earn With Lashkar",

        category:
            "fullstack",

        description:
            "Earning platform concept with users, submissions, withdrawals and admin dashboard.",

        tech:
            [
                "Next.js",
                "Firebase",
                "Admin"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 03 ================= */

    {

        title:
            "Todo AI Chatbot",

        category:
            "ai",

        description:
            "Todo application combined with an AI chatbot interface and task management workflow.",

        tech:
            [
                "Next.js",
                "AI",
                "Chatbot"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 04 ================= */

    {

        title:
            "Client Agreement Portal",

        category:
            "web",

        description:
            "Professional client agreement portal concept with PDF and WhatsApp workflow.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 05 ================= */

    {

        title:
            "Actor Portfolio",

        category:
            "ui",

        description:
            "Cinematic portfolio website concept for actor, model and content creator.",

        tech:
            [
                "HTML",
                "CSS",
                "GSAP"
            ],

        live:
            "https://actor-portfolio-m-khateeb-ejaz.vercel.app/",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 06 ================= */

    {

        title:
            "Lashkars Store",

        category:
            "web",

        description:
            "Online shopping and product showcase website with responsive design.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 07 ================= */

    {

        title:
            "Noor Online Shopping",

        category:
            "web",

        description:
            "Responsive online shopping website with modern product-focused interface.",

        tech:
            [
                "HTML",
                "CSS",
                "UI"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 08 ================= */

    {

        title:
            "Learn With Babar MCQ Portal",

        category:
            "web",

        description:
            "MCQ and government jobs preparation portal concept.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

    },


    /* ================= PROJECT 09 ================= */

    {

        title:
            "M. Khateeb Ejaz Portfolio",

        category:
            "ui",

        description:
            "Personal professional portfolio website showcasing skills, services and projects.",

        tech:
            [
                "HTML",
                "CSS",
                "JavaScript"
            ],

        live:
            "https://muhammadkhateebejaz.github.io/M.Khateeb-Ejaz-Portfolio-Website/",

        github:
            "https://github.com/MuhammadKhateebEjaz/M.Khateeb-Ejaz-Portfolio-Website"

    },


    /* ================= PROJECT 10 ================= */

    {

        title:
            "WaterPanda Website",

        category:
            "ui",

        description:
            "Premium drinking water brand website concept.",

        tech:
            [
                "HTML",
                "CSS",
                "UI"
            ],

        live:
            "https://github.com/MuhammadKhateebEjaz",

        github:
            "https://github.com/MuhammadKhateebEjaz"

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
