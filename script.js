const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageButtons = document.querySelectorAll(".language-button");
const translatableElements = document.querySelectorAll("[data-i18n]");

const translations = {
    en: {
        "nav.about": "About",
        "nav.skills": "Tech Stack",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",
        "hero.role": "Full-Stack Developer",
        "hero.text": "I build responsive full-stack web applications with React, TypeScript, JavaScript, Node.js, REST APIs, and cloud deployment on AWS.",
        "hero.experienceCta": "View Experience",
        "hero.contactCta": "Contact Me",
        "about.eyebrow": "Summary",
        "about.title": "Focused on modern web applications",
        "about.text": "Full-Stack Developer with focus on React, TypeScript, JavaScript, and Node.js. Experienced in building full-stack web applications with authentication, REST APIs, and cloud deployment. Strong interest in AI-powered development and modern web technologies.",
        "skills.eyebrow": "Tech Stack",
        "skills.title": "Tools I work with",
        "projects.eyebrow": "Projects",
        "projects.title": "Selected work",
        "project1.type": "Full-Stack Application",
        "project1.b1": "Built full-stack application with role-based authentication for students and teachers.",
        "project1.b2": "Implemented protected API routes and secure JWT authentication.",
        "project1.b3": "Developed question generation, user profiles, and content management features.",
        "project1.b4": "Deployed scalable infrastructure using AWS EC2, RDS, and Amplify.",
        "project2.type": "Full-Stack E-commerce Application",
        "project2.b1": "Developed full-stack e-commerce platform with product catalog and cart functionality.",
        "project2.b2": "Built REST API and implemented data persistence.",
        "project2.b3": "Designed responsive UI and ensured cross-browser compatibility.",
        "project3.type": "Frontend Project",
        "project3.private": "Private repository",
        "project3.b1": "Repository access is private; code can be shared or demonstrated on request.",
        "project3.b2": "Developed responsive user interfaces based on design requirements.",
        "project3.b3": "Implemented core frontend features and improved user experience.",
        "project3.b4": "Collaborated with backend developers to integrate APIs.",
        "project4.type": "Frontend Project",
        "project4.b1": "Built responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
        "project4.b2": "Improved website navigation and user experience.",
        "project4.b3": "Optimized layouts for responsiveness and cross-browser compatibility.",
        "project4.liveSoon": "Live soon",
        "project5.type": "Frontend Landing Page",
        "project5.b1": "Built a multilingual landing page for DTZ exam preparation using Next.js App Router.",
        "project5.b2": "Implemented language-based routing with JSON locales for DE, EN, RU, and AR content.",
        "project5.b3": "Developed responsive UI components, including language and theme switchers.",
        "project5.b4": "Used next/font for optimized font loading and deployed the project on Vercel.",
        "project6.type": "Frontend Project",
        "project6.b1": "Built a Meetup-inspired static frontend with a landing page and a separate events page.",
        "project6.b2": "Implemented event search and client-side filtering by type, distance, and category in vanilla JavaScript.",
        "project6.b3": "Added dark/light theme switching with localStorage persistence.",
        "project6.b4": "Created responsive layouts, animated sections, an online events slider, and an embedded Google Map.",
        "experience.eyebrow": "Experience",
        "experience.title": "Recent work",
        "experience1.role": "Junior Frontend Developer Intern",
        "experience1.company": "Confidently Project, German exam preparation platform",
        "experience1.b1": "Developed responsive UI components using HTML, CSS, and JavaScript.",
        "experience1.b2": "Improved user flows and website navigation.",
        "experience1.b3": "Integrated dynamic content and interactive features.",
        "experience1.b4": "Optimized layouts for responsiveness and cross-browser compatibility.",
        "experience1.b5": "Collaborated with team members using Git workflows.",
        "experience2.role": "Junior Frontend Developer Intern",
        "experience2.b1": "Contributed to transitioning the product from MVP to production-ready application.",
        "experience2.b2": "Developed responsive UI components and layouts from scratch.",
        "experience2.b3": "Integrated frontend with REST APIs.",
        "experience2.b4": "Improved usability, cross-browser compatibility, and basic performance.",
        "education.eyebrow": "Education",
        "education.title": "Learning path",
        "education1.text": "AI / Machine Learning, Berlin",
        "education2.text": "Full-Stack Web Development Weiterbildung, Berlin",
        "education3.text": "Degree in Veterinary Medicine",
        "extra.eyebrow": "Certifications & Languages",
        "extra.title": "Additional background",
        "extra.certifications": "Certifications",
        "extra.python": "Python course",
        "extra.languages": "Languages",
        "extra.english": "English - B2",
        "extra.german": "German - B1",
        "extra.italian": "Italian - B1",
        "extra.russian": "Russian - Native",
        "contact.eyebrow": "Contact",
        "contact.title": "Let's build something useful",
        "footer.role": "Full-Stack Developer."
    },
    de: {
        "nav.about": "Profil",
        "nav.skills": "Tech Stack",
        "nav.projects": "Projekte",
        "nav.experience": "Erfahrung",
        "nav.education": "Ausbildung",
        "nav.contact": "Kontakt",
        "hero.role": "Full-Stack Entwicklerin",
        "hero.text": "Ich entwickle responsive Full-Stack-Webanwendungen mit React, TypeScript, JavaScript, Node.js, REST APIs und Cloud-Deployment auf AWS.",
        "hero.experienceCta": "Erfahrung ansehen",
        "hero.contactCta": "Kontakt",
        "about.eyebrow": "Profil",
        "about.title": "Fokus auf moderne Webanwendungen",
        "about.text": "Full-Stack Entwicklerin mit Schwerpunkt auf React, TypeScript, JavaScript und Node.js. Erfahrung im Aufbau von Full-Stack-Webanwendungen mit Authentifizierung, REST APIs und Cloud-Deployment. Starkes Interesse an KI-gestuetzter Entwicklung und modernen Webtechnologien.",
        "skills.eyebrow": "Tech Stack",
        "skills.title": "Tools, mit denen ich arbeite",
        "projects.eyebrow": "Projekte",
        "projects.title": "Ausgewaehlte Arbeiten",
        "project1.type": "Full-Stack Anwendung",
        "project1.b1": "Full-Stack-Anwendung mit rollenbasierter Authentifizierung fuer Schueler und Lehrkraefte entwickelt.",
        "project1.b2": "Geschuetzte API-Routen und sichere JWT-Authentifizierung implementiert.",
        "project1.b3": "Funktionen fuer Fragengenerierung, Nutzerprofile und Content-Management entwickelt.",
        "project1.b4": "Skalierbare Infrastruktur mit AWS EC2, RDS und Amplify deployed.",
        "project2.type": "Full-Stack E-Commerce Anwendung",
        "project2.b1": "Full-Stack-E-Commerce-Plattform mit Produktkatalog und Warenkorb-Funktion entwickelt.",
        "project2.b2": "REST API aufgebaut und Datenpersistenz implementiert.",
        "project2.b3": "Responsive UI gestaltet und Cross-Browser-Kompatibilitaet sichergestellt.",
        "project3.type": "Frontend Projekt",
        "project3.private": "Privates Repository",
        "project3.b1": "Der Repository-Zugriff ist privat; Code kann auf Anfrage geteilt oder demonstriert werden.",
        "project3.b2": "Responsive Benutzeroberflaechen nach Designanforderungen entwickelt.",
        "project3.b3": "Zentrale Frontend-Funktionen implementiert und die User Experience verbessert.",
        "project3.b4": "Mit Backend-Entwicklern an der API-Integration zusammengearbeitet.",
        "project4.type": "Frontend Projekt",
        "project4.b1": "Responsive und interaktive Benutzeroberflaechen mit HTML, CSS und JavaScript erstellt.",
        "project4.b2": "Webseiten-Navigation und User Experience verbessert.",
        "project4.b3": "Layouts fuer Responsiveness und Cross-Browser-Kompatibilitaet optimiert.",
        "project4.liveSoon": "Live bald",
        "project5.type": "Frontend Landing Page",
        "project5.b1": "Mehrsprachige Landing Page zur DTZ-Pruefungsvorbereitung mit Next.js App Router entwickelt.",
        "project5.b2": "Sprachbasiertes Routing mit JSON-Lokalisierung fuer DE, EN, RU und AR Inhalte implementiert.",
        "project5.b3": "Responsive UI-Komponenten entwickelt, inklusive Sprach- und Theme-Switcher.",
        "project5.b4": "next/font fuer optimiertes Laden von Schriften genutzt und das Projekt auf Vercel deployed.",
        "project6.type": "Frontend Projekt",
        "project6.b1": "Meetup-inspiriertes statisches Frontend mit Landing Page und separater Event-Seite entwickelt.",
        "project6.b2": "Event-Suche und clientseitige Filterung nach Typ, Entfernung und Kategorie mit Vanilla JavaScript implementiert.",
        "project6.b3": "Dark/Light Theme-Switching mit Speicherung in localStorage hinzugefuegt.",
        "project6.b4": "Responsive Layouts, animierte Sektionen, Online-Event-Slider und eingebettete Google Map erstellt.",
        "experience.eyebrow": "Erfahrung",
        "experience.title": "Aktuelle Arbeit",
        "experience1.role": "Junior Frontend Developer Praktikantin",
        "experience1.company": "Confidently Project, Plattform zur Vorbereitung auf Deutschprüfungen",
        "experience1.b1": "Responsive UI-Komponenten mit HTML, CSS und JavaScript entwickelt.",
        "experience1.b2": "User Flows und Webseiten-Navigation verbessert.",
        "experience1.b3": "Dynamische Inhalte und interaktive Features integriert.",
        "experience1.b4": "Layouts fuer Responsiveness und Cross-Browser-Kompatibilitaet optimiert.",
        "experience1.b5": "Mit Teammitgliedern ueber Git-Workflows zusammengearbeitet.",
        "experience2.role": "Junior Frontend Developer Praktikantin",
        "experience2.b1": "Beim Uebergang des Produkts vom MVP zur produktionsreifen Anwendung mitgewirkt.",
        "experience2.b2": "Responsive UI-Komponenten und Layouts von Grund auf entwickelt.",
        "experience2.b3": "Frontend mit REST APIs integriert.",
        "experience2.b4": "Usability, Cross-Browser-Kompatibilitaet und grundlegende Performance verbessert.",
        "education.eyebrow": "Ausbildung",
        "education.title": "Lernweg",
        "education1.text": "AI / Machine Learning, Berlin",
        "education2.text": "Full-Stack Web Development Weiterbildung, Berlin",
        "education3.text": "Abschluss in Veterinaermedizin",
        "extra.eyebrow": "Zertifikate & Sprachen",
        "extra.title": "Zusaetzlicher Hintergrund",
        "extra.certifications": "Zertifikate",
        "extra.python": "Python-Kurs",
        "extra.languages": "Sprachen",
        "extra.english": "Englisch - B2",
        "extra.german": "Deutsch - B1",
        "extra.italian": "Italienisch - B1",
        "extra.russian": "Russisch - Muttersprache",
        "contact.eyebrow": "Kontakt",
        "contact.title": "Lass uns etwas Nuetzliches entwickeln",
        "footer.role": "Full-Stack Entwicklerin."
    }
};

function setLanguage(language) {
    const dictionary = translations[language] ?? translations.en;

    translatableElements.forEach((element) => {
        const key = element.dataset.i18n;
        if (key && dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === language);
    });

    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
}

navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
    }
});

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang || "en");
    });
});

setLanguage(localStorage.getItem("portfolio-language") || "en");
