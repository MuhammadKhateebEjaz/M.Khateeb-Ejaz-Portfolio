/* =========================================================
   MUHAMMAD KHATEEB EJAZ — PORTFOLIO APP
   VIP UI / UX JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const backTop = document.getElementById("backTop");
  const year = document.getElementById("year");
  const projectGrid = document.getElementById("projectGrid");
  const projectCounter = document.getElementById("projectCounter");
  const filters = document.querySelectorAll(".filter");


  /* =========================
     PAGE LOADED
  ========================= */

  document.body.classList.add("page-loaded");


  /* =========================
     TYPING EFFECT
  ========================= */

  const typingElement = document.getElementById("typing");

  const typingWords = [
    "Web Developer",
    "Front-End Developer",
    "React / Next.js Developer",
    "UI/UX Designer",
    "AI-Assisted Builder"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {

    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (!deleting) {
      typingElement.textContent =
        currentWord.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;

        setTimeout(typeEffect, 1700);
        return;
      }

    } else {

      typingElement.textContent =
        currentWord.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {
        deleting = false;

        wordIndex =
          (wordIndex + 1) % typingWords.length;
      }
    }

    setTimeout(
      typeEffect,
      deleting ? 45 : 85
    );
  }

  typeEffect();


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuBtn && navMenu) {

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.setAttribute(
      "aria-controls",
      "navMenu"
    );

    menuBtn.addEventListener("click", () => {

      const isOpen =
        navMenu.classList.toggle("open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuBtn.classList.toggle(
        "active",
        isOpen
      );
    });


    /* Close after clicking navigation */

    navMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      });

    });


    /* Close with Escape */

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {

        navMenu.classList.remove("open");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  }


  /* =========================
     HEADER SCROLL EFFECT
  ========================= */

  const header =
    document.querySelector(".site-header");

  function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 35) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }
  }

  handleHeaderScroll();

  window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
  );


  /* =========================
     BACK TO TOP
  ========================= */

  function handleBackTop() {

    if (!backTop) return;

    if (window.scrollY > 600) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }
  }

  handleBackTop();

  window.addEventListener(
    "scroll",
    handleBackTop,
    { passive: true }
  );


  if (backTop) {

    backTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================
     CURRENT YEAR
  ========================= */

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }


  /* =========================
     PROJECT DATA
  ========================= */

  const projects = [

    {
      title:
        "AI Social Media Automation Platform",

      category: "ai",

      icon: "fa-solid fa-robot",

      description:
        "AI-powered platform for uploading, managing, scheduling and automating social media content across multiple platforms.",

      tech: [
        "Next.js",
        "AI",
        "APIs",
        "Firebase",
        "Automation"
      ],

      live:
        "https://ai-social-automation-with-lashkars.vercel.app",

      github:
        "https://github.com/MuhammadKhateebEjaz/ai-social-automation-with-lashkars"
    },


    {
      title:
        "Earn With Lashkar",

      category: "fullstack",

      icon: "fa-solid fa-wallet",

      description:
        "Full-stack earning and submission platform with user management, admin dashboard, withdrawals and Firebase integration.",

      tech: [
        "Next.js",
        "Firebase",
        "Admin",
        "Dashboard"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz/earn-with-lashkar"
    },


    {
      title:
        "Todo AI Assistant",

      category: "ai",

      icon: "fa-solid fa-list-check",

      description:
        "Smart Todo application combined with an AI chatbot experience for managing tasks and interacting with an intelligent assistant.",

      tech: [
        "Next.js",
        "AI",
        "Chatbot",
        "JavaScript"
      ],

      live:
        "https://hackathon-ii-phase-iii-todo-ai-chat.vercel.app",

      github:
        "https://github.com/MuhammadKhateebEjaz/Hackathon-II-Phase-III-Todo-AI-Chatbot"
    },


    {
      title:
        "Client Agreement Portal",

      category: "web",

      icon: "fa-solid fa-file-signature",

      description:
        "Professional client agreement portal for creating, previewing and generating downloadable PDF agreements.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "PDF"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Google Unit Converter",

      category: "ui",

      icon: "fa-solid fa-arrows-rotate",

      description:
        "Clean and responsive unit conversion application designed with a simple Google-inspired interface.",

      tech: [
        "Python",
        "Streamlit",
        "UI"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Best Furniture Collection",

      category: "web",

      icon: "fa-solid fa-couch",

      description:
        "Modern furniture shopping interface focused on clean product presentation, responsive layout and conversion-friendly UI.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Figma"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Noor Online Shopping",

      category: "web",

      icon: "fa-solid fa-cart-shopping",

      description:
        "Responsive online shopping experience with product browsing, add-to-cart functionality and WhatsApp checkout flow.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "WhatsApp"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Learn With Babar",

      category: "fullstack",

      icon: "fa-solid fa-graduation-cap",

      description:
        "Educational and MCQ platform featuring interactive learning content, admin functionality and database-driven experiences.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "Database"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Personal Library Manager",

      category: "ui",

      icon: "fa-solid fa-book",

      description:
        "Personal library management application for organizing books and maintaining a simple digital collection.",

      tech: [
        "Python",
        "Streamlit",
        "UI"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Data Sweeper",

      category: "ui",

      icon: "fa-solid fa-database",

      description:
        "Data utility application designed to process, clean and manage datasets through an easy-to-use interface.",

      tech: [
        "Python",
        "Streamlit",
        "Data"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Uzma Enterprise Shopping Store",

      category: "web",

      icon: "fa-solid fa-store",

      description:
        "Responsive business e-commerce website with product browsing, shopping interactions and WhatsApp checkout.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "WhatsApp"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    },


    {
      title:
        "Password Strength Meter",

      category: "ui",

      icon: "fa-solid fa-shield-halved",

      description:
        "Interactive password security tool that evaluates password strength and provides a simple visual user experience.",

      tech: [
        "Python",
        "Streamlit",
        "Security",
        "UI"
      ],

      live: "#",

      github:
        "https://github.com/MuhammadKhateebEjaz"
    }

  ];


  /* =========================
     PROJECT ICON FALLBACK
  ========================= */

  function getProjectIcon(project) {

    if (project.icon) {
      return `<i class="${project.icon}"></i>`;
    }

    return `<i class="fa-solid fa-code"></i>`;
  }


  /* =========================
     PROJECT CATEGORY NAME
  ========================= */

  function getCategoryName(category) {

    const names = {
      all: "All",
      web: "Web",
      fullstack: "Full Stack",
      ai: "AI",
      ui: "UI / UX"
    };

    return names[category] || category;
  }


  /* =========================
     PROJECT CARD
  ========================= */

  function createProjectCard(project) {

    const techHTML =
      project.tech
        .map(
          tech => `<span>${tech}</span>`
        )
        .join("");


    const liveButton =
      project.live && project.live !== "#"
        ? `
          <a
            href="${project.live}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        `
        : `
          <a
            href="#contact"
            aria-label="Contact Muhammad Khateeb Ejaz"
          >
            Contact
          </a>
        `;


    const githubButton =
      project.github && project.github !== "#"
        ? `
          <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        `
        : "";


    return `
      <article
        class="project-card"
        data-category="${project.category}"
      >

        <div class="project-top">

          <div class="project-icon">
            ${getProjectIcon(project)}
          </div>

          <span class="project-category">
            ${getCategoryName(project.category)}
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
            ${techHTML}
          </div>


          <div class="project-actions">
            ${liveButton}
            ${githubButton}
          </div>

        </div>

      </article>
    `;
  }


  /* =========================
     RENDER PROJECTS
  ========================= */

  function renderProjects(category = "all") {

    if (!projectGrid) return;


    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter(
            project =>
              project.category === category
          );


    projectGrid.innerHTML =
      filteredProjects
        .map(createProjectCard)
        .join("");


    if (projectCounter) {

      projectCounter.textContent =
        `${filteredProjects.length} Projects`;

    }


    /* Small entrance animation */

    const cards =
      projectGrid.querySelectorAll(
        ".project-card"
      );

    cards.forEach((card, index) => {

      card.style.opacity = "0";

      card.style.transform =
        "translateY(15px)";

      setTimeout(() => {

        card.style.opacity = "1";

        card.style.transform =
          "";

      }, index * 45);

    });


    /* Scroll to projects on mobile */

    if (
      window.innerWidth <= 700 &&
      category !== "all"
    ) {

      const projectsSection =
        document.getElementById("projects");

      if (projectsSection) {

        setTimeout(() => {

          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 100);

      }

    }

  }


  /* =========================
     PROJECT FILTERS
  ========================= */

  filters.forEach(filter => {

    filter.addEventListener(
      "click",
      () => {

        filters.forEach(item => {
          item.classList.remove("active");
        });

        filter.classList.add("active");


        const category =
          filter.dataset.filter ||
          filter.getAttribute(
            "data-category"
          ) ||
          "all";


        renderProjects(category);

      }
    );

  });


  /* Initial render */

  renderProjects("all");


  /* =========================
     3D PROJECT TILT
  ========================= */

  function enableProjectTilt() {

    if (window.innerWidth <= 900) {
      return;
    }


    const cards =
      document.querySelectorAll(
        ".project-card"
      );


    cards.forEach(card => {

      card.addEventListener(
        "mousemove",
        event => {

          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;


          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;


          const rotateY =
            ((x - centerX) / centerX) * 3;


          const rotateX =
            ((centerY - y) / centerY) * 3;


          card.style.transform = `
            translateY(-10px)
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform = "";

        }
      );

    });

  }


  /*
     Run after project cards are rendered
  */

  setTimeout(
    enableProjectTilt,
    150
  );


  /* =========================
     MAGNETIC BUTTON EFFECT
  ========================= */

  if (window.innerWidth > 900) {

    const buttons =
      document.querySelectorAll(
        ".btn-primary, .nav-button"
      );


    buttons.forEach(button => {

      button.addEventListener(
        "mousemove",
        event => {

          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const moveX =
            (x - rect.width / 2) * 0.08;

          const moveY =
            (y - rect.height / 2) * 0.08;

          button.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

        }
      );


      button.addEventListener(
        "mouseleave",
        () => {

          button.style.transform = "";

        }
      );

    });

  }


  /* =========================
     IMAGE PARALLAX
  ========================= */

  const heroImage =
    document.querySelector(
      ".hero-image-wrap"
    );


  if (
    heroImage &&
    window.innerWidth > 900
  ) {

    window.addEventListener(
      "mousemove",
      event => {

        const x =
          (event.clientX /
            window.innerWidth -
            0.5);

        const y =
          (event.clientY /
            window.innerHeight -
            0.5);


        heroImage.style.transform = `
          perspective(1200px)
          rotateY(${x * 5}deg)
          rotateX(${y * -4}deg)
        `;

      },
      { passive: true }
    );

  }


  /* =========================
     SMOOTH INTERNAL LINKS
  ========================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetID =
            link.getAttribute("href");


          if (
            !targetID ||
            targetID === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetID
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


  /* =========================
     ACTIVE NAV LINK
  ========================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".nav-menu a[href^='#']"
    );


  function updateActiveNav() {

    let currentSection = "";


    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.offsetHeight;


      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      const href =
        link.getAttribute("href");


      link.classList.toggle(
        "active",
        href === `#${currentSection}`
      );

    });

  }


  updateActiveNav();


  window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
  );


  /* =========================
     INTERSECTION REVEAL
  ========================= */

  const revealElements =
    document.querySelectorAll(
      ".section-heading, .service-card, .stat-card, .about-image, .skills-layout, .contact-box"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {

      element.classList.add(
        "reveal-ready"
      );

      revealObserver.observe(
        element
      );

    });

  }


  /* =========================
     CONSOLE BRANDING
  ========================= */

  console.log(
    "%c Muhammad Khateeb Ejaz ",
    `
      background:#d7a84b;
      color:#080808;
      padding:8px 14px;
      border-radius:8px;
      font-weight:bold;
    `
  );

  console.log(
    "VIP Portfolio • AI-Assisted Development"
  );

});
