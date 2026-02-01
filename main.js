// main.js

// Translations object with Spanish added
const translations = {
  fr: {
    // Navigation
    "about": "À propos",
    "skills": "Compétences",
    "contact": "Contact",
    "loading": "Chargement...",
    
    // Header
    "name": "Emmanuel Selicour",
    "title": "Digital Specialist | Centre d'Appel | Marketing | Développement Web",
    
    // About
    "about_me": "À propos de moi",
    "bio1": "Je suis un jeune professionnel passionné avec de l'expérience dans plusieurs domaines : développement web, centre d'appel, marketing digital, e-commerce et plus encore. Je suis une personne sérieuse, flexible et toujours en apprentissage pour évoluer chaque jour.",
    "bio2": "Je crois au pouvoir de la connaissance et à la valeur du travail acharné. Mon objectif est de fournir des solutions efficaces et créatives dont tout le monde peut bénéficier.",
    
    // Skills
    "my_skills": "Mes Compétences",
    "call_center": "Centre d'Appel",
    "digital_marketing": "Marketing Digital",
    "web_dev": "Développement Web",
    "communication": "Communication",
    "learning": "en apprentissage",
    "languages": "Langues",
    
    // Skill items
    "skill1": "Gestion d'appels clients en français et créole",
    "skill2": "Communication claire et efficace",
    "skill3": "Utilisation de logiciels CRM",
    "skill4": "Création et gestion de campagnes sur les réseaux sociaux",
    "skill5": "SEO & marketing de contenu",
    "skill6": "Email marketing & analytics",
    "skill7": "Design responsive & mobile",
    "skill8": "Création de sites vitrine & e-commerce",
    "skill9": "Communication interpersonnelle efficace",
    "skill10": "Rédaction professionnelle",
    "skill11": "Techniques de présentation",
    "skill12": "Communication d'équipe",
    "lang1": "Créole haïtien (langue maternelle)",
    "lang2": "Français (avancé)",
    "lang3": "Anglais (conversationnel)",
    "lang4": "Espagnol (notions)",
    
    // Download CV
    "download_cv": "Télécharger mon CV",
    
    // Contact
    "contact_me": "Me contacter",
    "form_name": "Votre nom",
    "form_email": "Votre email",
    "form_message": "Message",
    "form_send": "Envoyer",
    
    // Buttons
    "see_skills": "Voir mes compétences",
    
    // Footer
    "footer_dev": "SITE DÉVELOPPÉ PAR : TRUE MANNO",
    
    // Alert
    "alert_title": "Message envoyé!",
    "alert_message": "Merci pour votre message. Je vous répondrai dès que possible.",
    "alert_ok": "OK"
  },
  en: {
    // Navigation
    "about": "About",
    "skills": "Skills",
    "contact": "Contact",
    "loading": "Loading...",
    
    // Header
    "name": "Emmanuel Selicour",
    "title": "Digital Specialist | Call Center | Marketing | Web Development",
    
    // About
    "about_me": "About Me",
    "bio1": "I am a passionate young professional with experience in several fields: web development, call center, digital marketing, e-commerce and more. I am a serious, flexible person always learning to grow every day.",
    "bio2": "I believe in the power of knowledge and the value of hard work. My goal is to provide effective and creative solutions that benefit everyone.",
    
    // Skills
    "my_skills": "My Skills",
    "call_center": "Call Center",
    "digital_marketing": "Digital Marketing",
    "web_dev": "Web Development",
    "communication": "Communication",
    "learning": "learning",
    "languages": "Languages",
    
    // Skill items
    "skill1": "Customer call management in French and Creole",
    "skill2": "Clear and effective communication",
    "skill3": "CRM software usage",
    "skill4": "Creation and management of social media campaigns",
    "skill5": "SEO & content marketing",
    "skill6": "Email marketing & analytics",
    "skill7": "Responsive & mobile design",
    "skill8": "Creation of showcase sites & e-commerce",
    "skill9": "Effective interpersonal communication",
    "skill10": "Professional writing",
    "skill11": "Presentation techniques",
    "skill12": "Team communication",
    "lang1": "Haitian Creole (native language)",
    "lang2": "French (advanced)",
    "lang3": "English (conversational)",
    "lang4": "Spanish (basic knowledge)",
    
    // Download CV
    "download_cv": "Download my CV",
    
    // Contact
    "contact_me": "Contact Me",
    "form_name": "Your name",
    "form_email": "Your email",
    "form_message": "Message",
    "form_send": "Send",
    
    // Buttons
    "see_skills": "View my skills",
    
    // Footer
    "footer_dev": "SITE DEVELOPED BY: TRUE MANNO",
    
    // Alert
    "alert_title": "Message sent!",
    "alert_message": "Thank you for your message. I will get back to you as soon as possible.",
    "alert_ok": "OK"
  },
  es: {
    // Navigation
    "about": "Sobre mí",
    "skills": "Habilidades",
    "contact": "Contacto",
    "loading": "Cargando...",
    
    // Header
    "name": "Emmanuel Selicour",
    "title": "Especialista Digital | Centro de Llamadas | Marketing | Desarrollo Web",
    
    // About
    "about_me": "Sobre mí",
    "bio1": "Soy un joven profesional apasionado con experiencia en varios campos: desarrollo web, centro de llamadas, marketing digital, comercio electrónico y más. Soy una persona seria, flexible y siempre en aprendizaje para evolucionar cada día.",
    "bio2": "Creo en el poder del conocimiento y el valor del trabajo duro. Mi objetivo es proporcionar soluciones efectivas y creativas de las que todos puedan beneficiarse.",
    
    // Skills
    "my_skills": "Mis Habilidades",
    "call_center": "Centro de Llamadas",
    "digital_marketing": "Marketing Digital",
    "web_dev": "Desarrollo Web",
    "communication": "Comunicación",
    "learning": "en aprendizaje",
    "languages": "Idiomas",
    
    // Skill items
    "skill1": "Gestión de llamadas de clientes en francés y criollo",
    "skill2": "Comunicación clara y efectiva",
    "skill3": "Uso de software CRM",
    "skill4": "Creación y gestión de campañas en redes sociales",
    "skill5": "SEO y marketing de contenidos",
    "skill6": "Email marketing y analytics",
    "skill7": "Diseño responsive y móvil",
    "skill8": "Creación de sitios vitrina y e-commerce",
    "skill9": "Comunicación interpersonal efectiva",
    "skill10": "Redacción profesional",
    "skill11": "Técnicas de presentación",
    "skill12": "Comunicación de equipo",
    "lang1": "Criollo haitiano (lengua materna)",
    "lang2": "Francés (avanzado)",
    "lang3": "Inglés (conversacional)",
    "lang4": "Español (nociones básicas)",
    
    // Download CV
    "download_cv": "Descargar mi CV",
    
    // Contact
    "contact_me": "Contáctame",
    "form_name": "Tu nombre",
    "form_email": "Tu email",
    "form_message": "Mensaje",
    "form_send": "Enviar",
    
    // Buttons
    "see_skills": "Ver mis habilidades",
    
    // Footer
    "footer_dev": "SITIO DESARROLLADO POR: TRUE MANNO",
    
    // Alert
    "alert_title": "¡Mensaje enviado!",
    "alert_message": "Gracias por tu mensaje. Te responderé lo antes posible.",
    "alert_ok": "OK"
  }
};

// Global state
let currentLang = 'fr';
let isDarkMode = false;

// DOM Elements
const elements = {
  // Loader
  loader: document.getElementById('loader'),
  
  // Navigation
  mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
  mobileMenu: document.querySelector('.mobile-menu'),
  navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),
  
  // Dark Mode
  darkModeToggle: document.querySelector('.dark-mode-toggle'),
  
  // Language
  langButtons: document.querySelectorAll('.lang-btn'),
  
  // Progress Bar
  progressBar: document.querySelector('.progress-bar'),
  
  // Alert Modal
  customAlert: document.getElementById('customAlert'),
  closeAlert: document.querySelector('.close-alert'),
  alertOk: document.getElementById('alert-ok'),
  alertTitle: document.getElementById('alert-title'),
  alertMessage: document.getElementById('alert-message'),
  
  // Form
  contactForm: document.querySelector('.contact-form'),
  
  // Sections
  sections: document.querySelectorAll('section'),
  aboutCards: document.querySelectorAll('.about-card'),
  skillCards: document.querySelectorAll('.skill-card'),
  
  // Scroll Indicator
  scrollIndicator: document.querySelector('.scroll-indicator'),
  
  // WhatsApp Float
  whatsappFloat: document.querySelector('.whatsapp-float')
};

// Initialize the application
function init() {
  // Set up event listeners
  setupEventListeners();
  
  // Detect and set initial language
  detectUserLanguage();
  
  // Check for saved dark mode preference
  checkDarkModePreference();
  
  // Initialize animations
  initAnimations();
  
  // Set up intersection observer for animations
  setupIntersectionObserver();
  
  // Initialize form
  initForm();
  
  // Hide loader after initialization
  setTimeout(() => {
    elements.loader.style.display = 'none';
    // Trigger initial animations
    animateOnScroll();
  }, 1000);
}

// Set up all event listeners
function setupEventListeners() {
  // Mobile menu toggle
  elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking on links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (elements.mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });
  
  // Dark mode toggle
  elements.darkModeToggle.addEventListener('click', toggleDarkMode);
  
  // Language buttons
  elements.langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.id.split('-')[1];
      setLanguage(lang);
    });
  });
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Alert modal
  elements.closeAlert.addEventListener('click', hideAlert);
  elements.alertOk.addEventListener('click', hideAlert);
  
  // Close alert when clicking outside
  elements.customAlert.addEventListener('click', (e) => {
    if (e.target === elements.customAlert) {
      hideAlert();
    }
  });
  
  // Form submission
  elements.contactForm.addEventListener('submit', handleFormSubmit);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
  
  // Scroll indicator click
  if (elements.scrollIndicator) {
    elements.scrollIndicator.addEventListener('click', () => {
      document.querySelector('#bio').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Window resize
  window.addEventListener('resize', handleResize);
}

// Language and location detection
async function detectUserLanguage() {
  // Check if language is already saved
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && ['fr', 'en', 'es'].includes(savedLang)) {
    setLanguage(savedLang);
    return;
  }

  // Detect browser language
  const browserLang = navigator.language || navigator.userLanguage;
  const primaryLang = browserLang.split('-')[0].toLowerCase();
  
  // Try to detect country using IP
  try {
    const response = await fetch('https://ipapi.co/country/');
    const countryCode = await response.text();
    
    // Map countries to languages
    const countryToLang = {
      // French-speaking countries
      'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'CA': 'fr', 'LU': 'fr', 'MC': 'fr',
      // English-speaking countries
      'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en',
      // Spanish-speaking countries
      'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es',
      'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'DO': 'es', 'BO': 'es',
      'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PR': 'es',
      'PA': 'es', 'UY': 'es', 'GQ': 'es'
    };

    const detectedLang = countryToLang[countryCode] || 
                        (['fr', 'en', 'es'].includes(primaryLang) ? primaryLang : 'en');
    
    setLanguage(detectedLang);
  } catch (error) {
    // Fallback to browser language or French
    const fallbackLang = ['fr', 'en', 'es'].includes(primaryLang) ? primaryLang : 'fr';
    setLanguage(fallbackLang);
  }
}

// Language management
function setLanguage(lang) {
  if (currentLang === lang) return;
  
  currentLang = lang;
  
  // Save preference
  localStorage.setItem('preferredLang', lang);
  
  // Update language buttons
  elements.langButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Update all translatable elements
  updateTranslations();
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update form placeholders
  updateFormPlaceholders();
}

// Update all translations on the page
function updateTranslations() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLang] && translations[currentLang][key]) {
      // Check if element is input or textarea
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

// Update form placeholders
function updateFormPlaceholders() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (nameInput) nameInput.placeholder = translations[currentLang]['form_name'];
  if (emailInput) emailInput.placeholder = translations[currentLang]['form_email'];
  if (messageInput) messageInput.placeholder = translations[currentLang]['form_message'];
}

// Dark Mode Functions
function checkDarkModePreference() {
  const savedMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedMode === 'true' || (!savedMode && prefersDark)) {
    enableDarkMode();
  }
}

function toggleDarkMode() {
  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  elements.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  isDarkMode = true;
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  elements.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  isDarkMode = false;
  localStorage.setItem('darkMode', 'false');
}

// Mobile Menu Functions
function toggleMobileMenu() {
  elements.mobileMenu.classList.toggle('active');
  elements.mobileMenuBtn.innerHTML = elements.mobileMenu.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
  
  // Toggle body scroll
  document.body.style.overflow = elements.mobileMenu.classList.contains('active') 
    ? 'hidden' 
    : '';
}

// Scroll Handling
function handleScroll() {
  // Update progress bar
  updateProgressBar();
  
  // Handle scroll animations
  animateOnScroll();
  
  // Handle scroll indicator visibility
  handleScrollIndicator();
  
  // Handle navigation active state
  updateActiveNavLink();
}

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  elements.progressBar.style.width = `${progress}%`;
}

function handleScrollIndicator() {
  if (!elements.scrollIndicator) return;
  
  const heroBottom = document.querySelector('.hero').offsetHeight;
  
  if (window.scrollY > heroBottom * 0.7) {
    elements.scrollIndicator.style.opacity = '0';
    elements.scrollIndicator.style.visibility = 'hidden';
  } else {
    elements.scrollIndicator.style.opacity = '1';
    elements.scrollIndicator.style.visibility = 'visible';
  }
}

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100;
  
  elements.navLinks.forEach(link => {
    const sectionId = link.getAttribute('href');
    if (!sectionId || sectionId === '#') return;
    
    const section = document.querySelector(sectionId);
    if (!section) return;
    
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Animation Functions
function initAnimations() {
  // Add initial animation classes
  elements.aboutCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  elements.skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

function setupIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.about-card, .skill-card, .contact-card').forEach(el => {
    observer.observe(el);
  });
}

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  
  elements.sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// Form Handling
function initForm() {
  // Add input validation
  const inputs = elements.contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', validateInput);
    input.addEventListener('blur', validateInput);
  });
}

function validateInput(e) {
  const input = e.target;
  const value = input.value.trim();
  const isValid = input.checkValidity();
  
  if (value === '') {
    input.classList.remove('valid', 'invalid');
    return;
  }
  
  if (isValid) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  // Validate all fields
  const inputs = elements.contactForm.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalid');
      isValid = false;
    }
  });
  
  if (!isValid) {
    showAlert(
      translations[currentLang]['alert_title'],
      currentLang === 'fr' ? "Veuillez remplir tous les champs obligatoires correctement." :
      currentLang === 'en' ? "Please fill in all required fields correctly." :
      "Por favor, complete todos los campos obligatorios correctamente.",
      'error'
    );
    return;
  }
  
  // Show loading state
  const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  submitBtn.disabled = true;
  
  try {
    const formData = new FormData(elements.contactForm);
    
    const response = await fetch(elements.contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showAlert(
        translations[currentLang]['alert_title'],
        translations[currentLang]['alert_message']
      );
      elements.contactForm.reset();
      
      // Reset validation classes
      elements.contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.classList.remove('valid', 'invalid');
      });
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    showAlert(
      translations[currentLang]['alert_title'],
      currentLang === 'fr' ? "Erreur lors de l'envoi du message. Veuillez réessayer." :
      currentLang === 'en' ? "Error sending message. Please try again." :
      "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
      'error'
    );
  } finally {
    // Restore button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
}

// Alert Modal Functions
function showAlert(title, message, type = 'success') {
  elements.alertTitle.textContent = title;
  elements.alertMessage.textContent = message;
  
  // Update icon based on type
  const alertIcon = document.querySelector('.alert-icon i');
  if (type === 'error') {
    alertIcon.className = 'fas fa-exclamation-circle';
    alertIcon.parentElement.style.background = 'var(--danger)';
  } else {
    alertIcon.className = 'fas fa-check-circle';
    alertIcon.parentElement.style.background = 'var(--success)';
  }
  
  elements.customAlert.style.display = 'flex';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    if (elements.customAlert.style.display === 'flex') {
      hideAlert();
    }
  }, 5000);
}

function hideAlert() {
  elements.customAlert.style.display = 'none';
}

// Smooth Scroll Function
function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  if (targetId === '#') return;
  
  const target = document.querySelector(targetId);
  if (!target) return;
  
  const headerHeight = document.querySelector('.modern-nav').offsetHeight;
  const targetPosition = target.offsetTop - headerHeight;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Window Resize Handler
function handleResize() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768 && elements.mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .about-card, .skill-card, .contact-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .about-card.animated, .skill-card.animated, .contact-card.animated {
    opacity: 1;
    transform: translateY(0);
  }
  
  section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .mobile-menu.active {
    max-height: 300px;
    display: flex;
  }
  
  .nav-link.active {
    color: var(--primary);
  }
  
  .nav-link.active::after {
    width: 100%;
  }
  
  input.valid, textarea.valid {
    border-color: var(--success) !important;
  }
  
  input.invalid, textarea.invalid {
    border-color: var(--danger) !important;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .fa-spin {
    animation: fa-spin 1s infinite linear;
  }
  
  @keyframes fa-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Add error handling for missing images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    console.warn('Image failed to load:', e.target.src);
    // You could set a placeholder image here
    // e.target.src = 'placeholder.jpg';
  }
}, true);

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});
