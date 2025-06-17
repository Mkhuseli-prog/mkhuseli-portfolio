// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animate skill bars when #skills section is in view
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const progressValue = bar.getAttribute("data-progress");
    bar.style.width = progressValue;
  });
}

// IntersectionObserver to trigger animation once on scroll
const skillsSection = document.querySelector("#skills");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(skillsSection);

// Modal logic
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
