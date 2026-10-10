# Muhammed Shadil — UI/UX Designer & Aspiring Frontend Developer Portfolio

A modern, responsive, and visually striking personal portfolio website created for **Muhammed Shadil**, a passionate UI/UX Designer and Aspiring Frontend Developer from Kozhikode, Kerala, India.

Built with a dark digital studio aesthetic, subtle glassmorphism, electric purple and neon cyan glow accents, and responsive layouts.

---

## 📑 Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Folder Structure](#folder-structure)
4. [How to Launch Locally](#how-to-launch-locally)
5. [How to Preview in Antigravity IDE](#how-to-preview-in-antigravity-ide)
6. [How to Update Personal Information](#how-to-update-personal-information)
7. [How to Add Project Screenshots and Real Links](#how-to-add-project-screenshots-and-real-links)
8. [How to Add a Resume PDF](#how-to-add-a-resume-pdf)
9. [How to Configure the Contact Form](#how-to-configure-the-contact-form)
10. [How to Change Colors, Fonts, and Design Elements](#how-to-change-colors-fonts-and-design-elements)

---

## 1. Project Overview
This website serves as a creative portfolio presenting:
* **Unique Visual Identity:** Deep obsidian `#07080e` and midnight navy surfaces with electric purple (`#8b5cf6`) and neon cyan (`#06b6d4`) glows.
* **Hero Section:** Animated role switcher cycling between *UI/UX Designer*, *Aspiring Frontend Developer*, and *Frontend Developer in Progress*, with floating design badges and creative avatar framing.
* **About Me:** Human-centered design narrative, personal career goals, three highlight pillars (*Creative Problem Solving*, *User-Centered Thinking*, *Continuous Learning*), and resume download guidance.
* **My Creative Toolkit:** Modular cards showcasing design skills (Wireframing, User Research, Prototyping, etc.) and development tools (Figma, HTML5, CSS3, JavaScript, Bootstrap 5, Git/GitHub) without misleading artificial percentages.
* **Selected Work:** In-depth case study cards for 3 core projects:
  1. *LMS: Softroniics Learning Management System*
  2. *AutoResq: Mechanic Assistance App*
  3. *Blessing: Islamic Tracker*
* **Design Process Timeline:** 4-step framework (*01 Discover*, *02 Define*, *03 Design*, *04 Refine*).
* **Education & Learning Journey:** Academic timeline highlighting the Softronics UI/UX course alongside customizable degree and certification placeholders.
* **Accessible Contact Form:** Client-side RFC email validation, real-time feedback, and straightforward backend configuration guidelines.

---

## 2. Technologies Used
* **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3:** Custom properties (design tokens), glassmorphism, keyframe animations, `@media (prefers-reduced-motion)` accessibility.
* **Bootstrap 5 (v5.3.3 CDN):** Responsive 12-column grid system, modals, and responsive layout utilities.
* **Vanilla JavaScript:** Clean ES6+ logic for typewriter text, scroll reveal observer, active link highlighting, custom cursor, and form validation.
* **Google Fonts:** `Space Grotesk` (headings & numbers) and `Inter` (body copy).
* **Font Awesome 6 (v6.5.2 CDN):** Vector icons for tools, categories, and social media.

---

## 3. Folder Structure
```text
PORTFOLIO/
│
├── index.html                  # Main HTML markup & sections
├── style.css                   # Custom styling, dark mode tokens & responsive queries
├── script.js                   # Typewriter, scroll observer, form validation & interactions
├── README.md                   # Comprehensive documentation & customization guide
│
└── images/                     # Local portfolio graphics and visual assets
    ├── profile.jpg             # Portrait of Muhammed Shadil with purple/cyan lighting
    ├── project-lms.jpg         # Softroniics LMS MacBook UI mockup
    ├── project-autoresq.jpg    # AutoResq roadside assistance mobile UI mockup
    └── project-blessing.svg    # Blessing Islamic Tracker high-res vector case study
```

---

## 4. How to Launch Locally

### Option A: Using Python Simple HTTP Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 3000
```
Then open your browser and navigate to:
```text
http://localhost:3000
```

### Option B: Using Node.js `npx serve`
```bash
npx serve .
```

### Option C: Double-Click File
You can also directly double-click `index.html` in Windows File Explorer to open it in Chrome, Edge, or Brave. (Running via a local HTTP server is recommended for testing all browser features).

---

## 5. How to Preview in Antigravity IDE
1. In Antigravity IDE, right-click `index.html` in the file tree.
2. Select **Open with Live Server** or launch the preview window using the IDE's built-in preview browser.
3. If running via terminal, start `python -m http.server 3000` and view `http://localhost:3000` in the integrated browser.

---

## 6. How to Update Personal Information
All personal details are organized in `index.html` with descriptive comments:

* **Name & Role Title:**
  * Find `<h1 class="hero-name">` in `index.html` to customize the name.
  * In `script.js`, edit the `roles` array to add or modify rotating roles:
    ```javascript
    const roles = [
        'UI/UX DESIGNER',
        'ASPIRING FRONTEND DEVELOPER',
        'FRONTEND DEVELOPER IN PROGRESS'
    ];
    ```
* **Introduction & Career Goal:**
  * Edit lines inside `<section id="about">` in `index.html`.
* **Social Media Links:**
  * Search for `https://instagram.com`, `https://linkedin.com`, and `https://github.com` in `index.html` and replace them with your personal profile URLs.
* **Education & University Details:**
  * In `<section id="education">`, replace `[Your Degree Qualification]` and `[Institution / College / University Name]` with your actual degree and college.

---

## 7. How to Add Project Screenshots and Real Links
1. Save your project screenshot or exported mockup image into the `images/` folder (e.g., `images/my-new-project.jpg`).
2. In `index.html`, find the `<section id="projects">` section.
3. Update the `src` attribute of the project's `<img>` tag:
   ```html
   <img src="images/my-new-project.jpg" alt="Project Name" class="project-thumbnail">
   ```
4. Update the GitHub or Live Demo links:
   ```html
   <a href="https://github.com/yourusername/your-repo" target="_blank" class="btn-project-secondary">
   ```
5. Customize the text inside the corresponding case study modal (`#modalProjectLMS`, `#modalProjectAutoResq`, `#modalProjectBlessing`) to describe your specific project challenges and design outcomes.

---

## 8. How to Add a Resume PDF
1. Export your resume from Figma, Canva, or Word as a PDF named `Muhammed_Shadil_Resume.pdf`.
2. Place the file inside the project directory (or create an `assets/` folder).
3. In `index.html`, locate `#btn-download-resume` under `<section id="about">` and change the button to a direct link:
   ```html
   <a href="assets/Muhammed_Shadil_Resume.pdf" download="Muhammed_Shadil_Resume.pdf" class="btn btn-gradient btn-sm">
       <i class="fa-solid fa-download"></i>
       <span>Download Resume</span>
   </a>
   ```

---

## 9. How to Configure the Contact Form
The contact form in `index.html` includes client-side validation that validates user input (name, email format, subject, message). To receive real form submissions in your email inbox without building a complex backend server:

### Option A: Using Formspree (Free & Quick)
1. Sign up for free at [https://formspree.io](https://formspree.io).
2. Create a new form and copy your unique Form ID endpoint (e.g., `https://formspree.io/f/xyzaopqr`).
3. In `index.html`, add the `action` and `method` attributes to `<form id="contactForm">`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Now, whenever a visitor sends a message, it will be delivered directly to your email address!

### Option B: Using Web3Forms (No Registration Required)
1. Request an access key from [https://web3forms.com](https://web3forms.com).
2. Add the hidden access key input to your form:
   ```html
   <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

---

## 10. How to Change Colors, Fonts, and Design Elements
All global styling is defined via CSS variables at the top of `style.css`:

```css
:root {
    /* Backgrounds */
    --bg-base: #07080e;                /* Main dark background */
    --bg-surface: #0c0f1d;             /* Section tone */
    
    /* Accents */
    --accent-purple: #8b5cf6;          /* Primary electric purple */
    --accent-blue: #06b6d4;            /* Secondary neon cyan/blue */
    
    /* Typography */
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

* To change the primary accent from purple to emerald, simply change `--accent-purple` to `#10b981`.
* To alter the fonts, load your preferred font family in `index.html` and update `--font-heading` or `--font-body` in `style.css`.

---

## 🛡️ Accessibility & Performance Highlights
* **Keyboard Navigation:** Fully navigable with `Tab` and `Shift+Tab`, featuring visible high-contrast focus rings.
* **Reduced Motion:** Fully complies with `@media (prefers-reduced-motion: reduce)` to disable animations for users with vestibular sensitivities.
* **Semantic HTML:** Employs proper heading levels (`<h1>` through `<h5>`), descriptive `alt` tags, and `aria` attributes.
* **Zero Bloat:** Uses CDN caching for Bootstrap and Font Awesome; runs fast with pure Vanilla JS.
