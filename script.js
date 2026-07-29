/* ==========================================================
   WATERS INSTRUCTIONAL DESIGN
   SCRIPT.JS
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Reveal Animation
       ========================================== */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(section => observer.observe(section));



    /* ==========================================
       Smooth Anchor Scrolling
       ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });



    /* ==========================================
       Header Scroll Effect
       ========================================== */

    const header = document.querySelector(".site-header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.05)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);



    /* ==========================================
       Active Navigation
       ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateNavigation();

    window.addEventListener("scroll", updateNavigation);

});
