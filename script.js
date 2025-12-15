/* =====================================================
   Reunite.io – Main JavaScript
   Handles animations, scroll reveal & mobile menu
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= HERO LOAD ANIMATION ================= */
  const heroElements = document.querySelectorAll(
    ".badge, .hero-title, .hero-desc, .hero-btns, .stats-bar"
  );

  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, index * 200);
  });

  /* ================= SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(
    ".reveal, .fade-in, .fade-in-up"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* ================= STAGGER LOGO ANIMATION ================= */
  const logoContainer = document.querySelector(".logos");
  if (logoContainer) {
    const logos = logoContainer.querySelectorAll("span");
    logos.forEach((logo, i) => {
      logo.style.opacity = "0";
      logo.style.transform = "translateY(20px)";
      setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
        logo.style.transition = "all 0.6s ease";
      }, i * 120);
    });
  }

  /* ================= MOBILE MENU ================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("open");

      if (!isOpen) {
        navLinks.classList.add("open");
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "white";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "14px";
        navLinks.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        navLinks.style.animation = "menuDrop 0.3s ease forwards";
      } else {
        navLinks.classList.remove("open");
        navLinks.style.display = "none";
      }
    });
  }

});

/* ================= MENU DROP KEYFRAME ================= */
const style = document.createElement("style");
style.innerHTML = `
@keyframes menuDrop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(style);
