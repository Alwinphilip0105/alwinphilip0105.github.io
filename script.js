'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

const projectItems = document.querySelectorAll(".project-item[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalOverlay = document.querySelector("[data-project-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalProblem = document.querySelector("[data-project-modal-problem]");
const projectModalApproach = document.querySelector("[data-project-modal-approach]");
const projectModalImpact = document.querySelector("[data-project-modal-impact]");
const projectModalLiveLink = document.querySelector("[data-project-modal-live-link]");
const projectModalDemoLink = document.querySelector("[data-project-modal-demo-link]");
const projectModalHubLink = document.querySelector("[data-project-modal-hub-link]");
const projectModalSourceLink = document.querySelector("[data-project-modal-source-link]");
const projectModalBanner = document.querySelector("[data-project-modal-banner]");
const projectModalImg = document.querySelector("[data-project-modal-img]");

const openProjectModal = function (projectItem, projectLink) {
  if (!projectModalContainer) {
    return;
  }

  const titleElement = projectItem.querySelector(".project-title");
  const categoryElement = projectItem.querySelector(".project-category");
  const title = titleElement ? titleElement.textContent.trim() : "Project";
  const category = categoryElement ? categoryElement.textContent.trim() : "Category";

  projectModalTitle.textContent = title;
  projectModalCategory.textContent = category;

  const cardImg = projectItem.querySelector(".project-img img");
  if (projectModalBanner && projectModalImg && cardImg && cardImg.src) {
    projectModalImg.src = cardImg.currentSrc || cardImg.src;
    projectModalImg.alt = cardImg.alt || title;
    projectModalBanner.removeAttribute("hidden");
  } else if (projectModalBanner) {
    projectModalBanner.setAttribute("hidden", "");
  }

  projectModalProblem.textContent = projectItem.getAttribute("data-case-problem") || projectItem.dataset.caseProblem || "Built to solve a real-world product and user-flow challenge.";
  projectModalApproach.textContent = projectItem.getAttribute("data-case-approach") || projectItem.dataset.caseApproach || "Implemented a practical architecture with iterative development and integration testing.";
  projectModalImpact.textContent = projectItem.getAttribute("data-case-impact") || projectItem.dataset.caseImpact || "Delivered measurable improvements in user experience and system reliability.";

  const sourceHref = projectItem.getAttribute("data-source-link") || projectItem.dataset.sourceLink || (projectLink ? projectLink.getAttribute("href") : "#");
  const liveHref = projectItem.getAttribute("data-live-link") || projectItem.dataset.liveLink || "";
  const demoHref = (projectLink && projectLink.getAttribute("data-demo-link")) || projectItem.getAttribute("data-demo-link") || projectItem.dataset.demoLink || "";
  const hubHref = (projectLink && projectLink.getAttribute("data-hub-link")) || projectItem.getAttribute("data-hub-link") || projectItem.dataset.hubLink || "";

  const isCoreSentinel = title === "Core Sentinel";

  projectModalSourceLink.setAttribute("href", sourceHref || "#");

  if (projectModalDemoLink) {
    if (demoHref && isCoreSentinel) {
      projectModalDemoLink.setAttribute("href", demoHref);
      projectModalDemoLink.removeAttribute("hidden");
    } else {
      projectModalDemoLink.setAttribute("hidden", "");
    }
  }

  if (projectModalHubLink) {
    if (hubHref && isCoreSentinel) {
      projectModalHubLink.setAttribute("href", hubHref);
      projectModalHubLink.removeAttribute("hidden");
    } else {
      projectModalHubLink.setAttribute("hidden", "");
    }
  }

  const hasCoreSentinelExtras = isCoreSentinel && (demoHref || hubHref);

  if (liveHref) {
    projectModalLiveLink.textContent = hasCoreSentinelExtras ? "Landing / walkthrough" : "Live Demo";
    projectModalLiveLink.setAttribute("href", liveHref);
    projectModalLiveLink.removeAttribute("aria-disabled");
    projectModalLiveLink.classList.remove("disabled");
    if (hasCoreSentinelExtras) {
      projectModalLiveLink.classList.add("secondary");
    } else {
      projectModalLiveLink.classList.remove("secondary");
    }
  } else {
    projectModalLiveLink.textContent = "Demo on Request";
    projectModalLiveLink.setAttribute("href", "#");
    projectModalLiveLink.setAttribute("aria-disabled", "true");
    projectModalLiveLink.classList.add("disabled");
    projectModalLiveLink.classList.remove("secondary");
  }

  projectModalContainer.classList.add("active");
};

const closeProjectModal = function () {
  if (!projectModalContainer) {
    return;
  }
  projectModalContainer.classList.remove("active");
};

projectItems.forEach((projectItem) => {
  const projectLink = projectItem.querySelector("a");
  if (!projectLink) {
    return;
  }

  projectLink.addEventListener("click", function (event) {
    event.preventDefault();
    openProjectModal(projectItem, projectLink);
  });
});

if (projectModalOverlay) {
  projectModalOverlay.addEventListener("click", closeProjectModal);
}

if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});

if (projectModalLiveLink) {
  projectModalLiveLink.addEventListener("click", function (event) {
    if (projectModalLiveLink.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

    // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.setAttribute("name", "sunny-outline");
  } else {
    icon.setAttribute("name", "moon-outline");
  }
};
