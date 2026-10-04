/* =========================================================
   MUHAMMAD KHATEEB EJAZ
   PREMIUM PORTFOLIO — APP.JS
========================================================= */


/* =========================================================
   01 — ELEMENTS
========================================================= */

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

const typingElement = document.getElementById("typing");

const backTop = document.getElementById("backTop");

const yearElement = document.getElementById("year");

const projectGrid = document.getElementById("projectGrid");
const projectCounter = document.getElementById("projectCounter");

const filterButtons = document.querySelectorAll(".filter");
const navLinks = document.querySelectorAll(".nav-link");


/* =========================================================
   02 — CURRENT YEAR
========================================================= */

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   03 — MOBILE MENU
========================================================= */

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.classList.toggle(
      "active",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  /* Close menu after clicking a link */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  /* Close menu when clicking outside */

  document.addEventListener("click", (event) => {

    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      nav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================================================
   04 — HEADER ON SCROLL
========================================================= */

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 35) {

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
   05 — TYPING EFFECT
========================================================= */

const typingWords = [
  "Front-End Developer",
  "React.js Developer",
  "AI Website Developer",
  "Creative Web Developer",
  "UI-Focused Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeText() {

  if (!typingElement) return;

  const currentWord =
    typingWords[wordIndex];

  if (!deleting) {

    characterIndex++;

    typingElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    if (
      characterIndex >=
      currentWord.length
    ) {

      deleting = true;

      setTimeout(
        typeText,
        1400
      );

      return;
    }

  } else {

    characterIndex--;

    typingElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    if (characterIndex <= 0) {

      deleting = false;

      wordIndex =
        (wordIndex + 1) %
        typingWords.length;

    }

  }

  const typingSpeed =
    deleting ? 45 : 75;

  setTimeout(
    typeText,
    typingSpeed
  );
}

typeText();


/* =========================================================
   06 — ACTIVE NAV LINK
========================================================= */

const sections = document.querySelectorAll(
  "section[id]"
);

function updateActiveNav() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + 160;

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition <
        sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    const target =
      link.getAttribute("href");

    link.classList.toggle(
      "active",
      target === `#${currentSection}`
    );

  });

}

window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive: true }
);

updateActiveNav();


/* =========================================================
   07 — BACK TO TOP
========================================================= */

function updateBackTop() {

  if (!backTop) return;

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


if (backTop) {

  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   08 — PROJECT DATA
========================================================= */

const projects = [

  {
    title: "AI Social Automation Platform",

    category: "ai",

    categoryName: "AI / Automation",

    icon: "fa-solid fa-robot",

    description:
      "AI-powered social media workflow for content uploads, captions, scheduling, analytics and multi-platform publishing.",

    tech: [
      "Next.js",
      "Firebase",
      "AI",
      "APIs"
    ],

    demo:
      "https://ai-social-automation-with-lashkars.vercel.app/",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Earn With Lashkar",

    category: "fullstack",

    categoryName: "Full Stack",

    icon: "fa-solid fa-chart-line",

    description:
      "A full-stack platform featuring user accounts, submissions, withdrawals and an admin management system.",

    tech: [
      "Next.js",
      "Firebase",
      "Admin",
      "Auth"
    ],

    demo:
      "https://earn-with-lashkar.vercel.app/",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Todo AI Chatbot",

    category: "ai",

    categoryName: "AI / Chatbot",

    icon: "fa-solid fa-comments",

    description:
      "A task management experience combined with an AI chatbot interface and simple local authentication.",

    tech: [
      "Next.js",
      "JavaScript",
      "AI",
      "LocalStorage"
    ],

    demo:
      "https://hackathon-ii-phase-iii-todo-ai-chat.vercel.app/",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Actor Portfolio",

    category: "ui",

    categoryName: "Portfolio / UI",

    icon: "fa-solid fa-camera",

    description:
      "A premium personal portfolio concept designed for an actor, model and content creator.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP"
    ],

    demo:
      "https://m-khateeb-ejaz-portfolio.vercel.app/",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Dynamic Resume Builder",

    category: "web",

    categoryName: "Web Application",

    icon: "fa-solid fa-file-lines",

    description:
      "Interactive resume creation experience allowing users to build and customize professional CV content.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI"
    ],

    demo:
      "#",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Client Agreement Portal",

    category: "fullstack",

    categoryName: "Client System",

    icon: "fa-solid fa-file-signature",

    description:
      "A professional client agreement workflow created to simplify project details, confirmation and communication.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PDF"
    ],

    demo:
      "#",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Lashkars Store",

    category: "web",

    categoryName: "E-Commerce",

    icon: "fa-solid fa-bag-shopping",

    description:
      "Responsive e-commerce interface focused on products, customer experience and clean visual presentation.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Forms"
    ],

    demo:
      "#",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Noor Online Shopping",

    category: "web",

    categoryName: "E-Commerce",

    icon: "fa-solid fa-cart-shopping",

    description:
      "Modern online shopping interface designed with responsive layouts and mobile-friendly product presentation.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive"
    ],

    demo:
      "#",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  },


  {
    title: "Learn With Babar",

    category: "ui",

    categoryName: "Education",

    icon: "fa-solid fa-graduation-cap",

    description:
      "Educational and MCQ-based learning platform concept focused on simple navigation and accessible UI.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "MCQs"
    ],

    demo:
      "#",

    code:
      "https://github.com/MuhammadKhateebEjaz"
  }

];


/* =========================================================
   09 — PROJECT RENDER
========================================================= */

function renderProjects(filter = "all") {

  if (!projectGrid) return;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );


  projectGrid.innerHTML = "";


  filteredProjects.forEach(
    (project, index) => {

      const card =
        document.createElement("article");

      card.className =
        "project-card";


      card.innerHTML = `

        <div class="project-top">

          <div class="project-icon">
            <i class="${project.icon}"></i>
          </div>

          <span class="project-category">
            ${project.categoryName}
          </span>

        </div>


        <div class="project-body">

          <h3>
            ${project.title}
          </h3>

          <p>
            ${project.description}
          </p>


          <div class="project-tech">

            ${project.tech
              .map(
                (tech) =>
                  `<span>${tech}</span>`
              )
              .join("")}

          </div>


          <div class="project-actions">

            <a
              href="${project.demo}"
              ${
                project.demo === "#"
                  ? 'aria-disabled="true"'
                  : 'target="_blank" rel="noopener noreferrer"'
              }
            >
              View Project
            </a>

            <a
              href="${project.code}"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      `;


      projectGrid.appendChild(card);


      /* Small entrance animation */

      card.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(15px)"
          },
          {
            opacity: 1,
            transform:
              "translateY(0)"
          }
        ],
        {
          duration: 400,
          delay: index * 50,
          easing:
            "cubic-bezier(.2,.75,.2,1)",
          fill: "both"
        }
      );

    }
  );


  if (projectCounter) {

    projectCounter.textContent =
      `${filteredProjects.length} Projects`;

  }

}


/* =========================================================
   10 — PROJECT FILTERS
========================================================= */

filterButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      filterButtons.forEach(
        (item) => {

          item.classList.remove(
            "active"
          );

        }
      );


      button.classList.add(
        "active"
      );


      const filter =
        button.dataset.filter ||
        "all";


      renderProjects(filter);

    }
  );

});


/* Initial projects */

renderProjects();


/* =========================================================
   11 — PREVENT DEAD DEMO LINKS
========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const link =
      event.target.closest(
        '.project-actions a[aria-disabled="true"]'
      );

    if (!link) return;

    event.preventDefault();

  }
);


/* =========================================================
   12 — SMOOTH ANCHOR FALLBACK
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   13 — SIMPLE REVEAL ANIMATION
========================================================= */

const revealItems =
  document.querySelectorAll(
    ".section-heading, .service-card, .skill-row, .project-card, .about-image-card, .about-content, .contact-box"
  );


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.animate(
              [
                {
                  opacity: 0,
                  transform:
                    "translateY(25px)"
                },
                {
                  opacity: 1,
                  transform:
                    "translateY(0)"
                }
              ],
              {
                duration: 650,
                easing:
                  "cubic-bezier(.2,.75,.2,1)",
                fill: "both"
              }
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.08
      }
    );


  revealItems.forEach(
    (item) => {

      revealObserver.observe(
        item
      );

    }
  );

}


/* =========================================================
   14 — MOUSE PARALLAX FOR HERO
========================================================= */

const heroVisual =
  document.querySelector(
    ".hero-visual"
  );


if (
  heroVisual &&
  window.matchMedia(
    "(min-width: 901px)"
  ).matches
) {

  heroVisual.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroVisual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left)
        / rect.width
        - 0.5;

      const y =
        (event.clientY - rect.top)
        / rect.height
        - 0.5;


      const portrait =
        heroVisual.querySelector(
          ".portrait-frame"
        );

      const cards =
        heroVisual.querySelectorAll(
          ".hero-card"
        );


      if (portrait) {

        portrait.style.transform =
          `
          perspective(1400px)
          rotateY(${x * 7}deg)
          rotateX(${y * -4}deg)
          translateY(-3px)
          `;

      }


      cards.forEach(
        (card, index) => {

          const amount =
            index === 0
              ? 10
              : -8;

          card.style.transform =
            `
            translate(
              ${x * amount}px,
              ${y * amount}px
            )
            `;

        }
      );

    }
  );


  heroVisual.addEventListener(
    "mouseleave",
    () => {

      const portrait =
        heroVisual.querySelector(
          ".portrait-frame"
        );

      const cards =
        heroVisual.querySelectorAll(
          ".hero-card"
        );


      if (portrait) {

        portrait.style.transform =
          `
          perspective(1400px)
          rotateY(-5deg)
          rotateX(0deg)
          translateY(0)
          `;

      }


      cards.forEach(
        (card) => {

          card.style.transform =
            "translate(0, 0)";

        }
      );

    }
  );

}


/* =========================================================
   15 — ESC KEY CLOSE MENU
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      nav &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      menuToggle?.classList.remove(
        "active"
      );

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


/* =========================================================
   16 — PAGE READY
========================================================= */

document.documentElement.classList.add(
  "js-ready"
);

console.log(
  "Muhammad Khateeb Ejaz Portfolio — Loaded Successfully."
);
