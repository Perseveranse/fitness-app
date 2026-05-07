const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navBackdrop = document.querySelector(".nav-backdrop");
const navLinks = document.querySelectorAll(".nav a");
const scrollLinks = document.querySelectorAll('a[href^="#"]');

function setMenuState(isOpen) {
  nav.classList.toggle("open", isOpen);
  navBackdrop.classList.toggle("visible", isOpen);
  menuToggle.classList.toggle("active", isOpen);
  body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function closeMenu() {
  setMenuState(false);
}

function setActiveNavLink(hash) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

function initializeAccordion(scope) {
  const accordionItems = scope.querySelectorAll(".accordion-container");

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-head");
    const bodyPanel = item.querySelector(".accordion-body");

    trigger.addEventListener("click", () => {
      accordionItems.forEach((panel) => {
        const panelTrigger = panel.querySelector(".accordion-head");
        const panelBody = panel.querySelector(".accordion-body");
        const isCurrent = panel === item;

        panel.classList.toggle("active", isCurrent);
        panelTrigger.setAttribute("aria-expanded", String(isCurrent));
        panelBody.hidden = !isCurrent;
      });
    });
  });
}

menuToggle.addEventListener("click", () => {
  setMenuState(!nav.classList.contains("open"));
});

navBackdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.querySelectorAll(".accordion, .faq-list").forEach((accordionScope) => {
  initializeAccordion(accordionScope);
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", hash);
    setActiveNavLink(hash);
    closeMenu();
  });
});
