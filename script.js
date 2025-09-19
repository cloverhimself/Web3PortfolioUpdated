// Experience data - easily customizable
const experiences = [
  {
    title: "Onchain-Circle",
    role: "Community Manager",
    duration: "1 Month",
    period: "From 2025-09 to Current",
    description:
      "I am in charge of overseeing all activities within the Discord server including event chats, voice chats, support tickets, and more.",
    avatar: "onchaincircle.jpg",
  },
  {
    title: "$MOIST",
    role: "Community Manager",
    duration: "3+ months",
    period: "From 2024-11 to 2025-02",
    description:
      "In charge of overseeing all activities within the Discord server, including event chats, voice chats, support tickets, and more. Also responsible for managing and delegating tasks to other staff.",
    avatar: "Moist.jpg",
  },
  {
    title: "$KingCapy",
    role: "Moderator",
    duration: "1 months",
    period: "From 2024-05 to current",
    description:
      "Helped in Community moderation and helping keeping the community active and engaged",
    avatar: "capy.jpg",
  },
  {
    title: "$Platy",
    role: "Moderator",
    duration: "2 months",
    period: "From 2024-04 to 2024-06",
    description:
      "I am in charge of overseeing all activities within the Telegram Community, including event chats, AMA's , Questions, and more.",
    avatar: "platy.jpg",
  }
]

// Function to create experience cards
function createExperienceCard(experience) {
  return `
        <div class="experience-card">
            <img src="${experience.avatar}" alt="${experience.title}" class="project-avatar" onclick="changeProjectAvatar(this)">
            <div class="experience-header">
                <div class="experience-info">
                    <h4>${experience.title}</h4>
                    <div class="experience-role">${experience.role}</div>
                    <div class="experience-duration">${experience.period}</div>
                </div>
                <div class="experience-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    ${experience.duration}
                </div>
            </div>
            <p class="experience-description">${experience.description}</p>
        </div>
    `
}

// Function to populate experiences
function populateExperiences() {
  const experiencesGrid = document.getElementById("experiencesGrid")
  experiencesGrid.innerHTML = experiences.map(createExperienceCard).join("")
}

// Function to change profile image
function changeProfileImage() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.onchange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        document.getElementById("profileImage").src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  input.click()
}

// Function to change project avatar
function changeProjectAvatar(imgElement) {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.onchange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        imgElement.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  input.click()
}

// Function to handle smooth scrolling for internal links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  })
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Populate experiences
  populateExperiences()

  // Add click event to profile image
  document.getElementById("profileImage").addEventListener("click", changeProfileImage)

  // Add hover effects and animations
  const cards = document.querySelectorAll(".experience-card, .review-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards and sections
  const elementsToAnimate = document.querySelectorAll(".experience-card, .review-card, .about-section, .why-me-section")
  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add some interactive features
document.addEventListener("DOMContentLoaded", () => {
  // Add typing effect to the main title (optional)
  const title = document.querySelector(".main-title")
  const originalText = title.textContent

  // Add click handlers for social links
  const socialLinks = document.querySelectorAll(".social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add a subtle animation on click
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })
})







// Review Carousel
const reviews = document.querySelectorAll(".review-card")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentIndex = 0

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove("active")
    if (i === index) {
      review.classList.add("active")
    }
  })
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length
  showReview(currentIndex)
})

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length
  showReview(currentIndex)
})

// Auto-play every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % reviews.length
  showReview(currentIndex)
}, 5000)


















// Toggle certifications gallery
const toggleBtn = document.getElementById("toggleCertsBtn");
const certsGallery = document.getElementById("certsGallery");

toggleBtn.addEventListener("click", () => {
  if (certsGallery.style.display === "none") {
    certsGallery.style.display = "grid";
    toggleBtn.textContent = "Hide Certifications";
  } else {
    certsGallery.style.display = "none";
    toggleBtn.textContent = "Show Certifications";
  }
});

// Modal for full-size certificate view
const certModal = document.getElementById("certModal");
const certModalImg = document.getElementById("certModalImg");

function openCert(img) {
  certModal.style.display = "flex";
  certModalImg.src = img.src;
}

function closeCert() {
  certModal.style.display = "none";
}


































