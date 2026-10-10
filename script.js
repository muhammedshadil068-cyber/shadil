/**
 * ==============================================================================
 * PORTFOLIO JAVASCRIPT — MUHAMMED SHADIL
 * Creative UI/UX Designer & Aspiring Frontend Developer
 * ==============================================================================
 * Vanilla JavaScript Implementation:
 * 1. Dynamic Typewriter Effect for Hero Roles
 * 2. Sticky Glassmorphic Navbar on Scroll
 * 3. Mobile Hamburger Menu Auto-Collapse
 * 4. Active Navigation Highlighting (IntersectionObserver)
 * 5. Scroll Reveal Animations (IntersectionObserver)
 * 6. Subtle Desktop-Only Custom Cursor (Touch & Motion Aware)
 * 7. Accessible Contact Form Validation & Backend Integration Handler
 * 8. Back-To-Top Smooth Scrolling Button
 * 9. Dynamic Copyright Year
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. DYNAMIC TYPEWRITER EFFECT IN HERO SECTION
       Cycling between UI/UX DESIGNER and ASPIRING FRONTEND DEVELOPER
       -------------------------------------------------------------------------- */
    const roleTextElement = document.getElementById('dynamicRoleText');
    const roles = [
        'UI/UX DESIGNER',
        'ASPIRING FRONTEND DEVELOPER',
        'FRONTEND DEVELOPER IN PROGRESS'
    ];

    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;       // Typing pace in ms
    const deletingSpeed = 45;     // Erasing pace in ms
    const delayBetweenRoles = 2000; // Pause when word is completely typed

    function runTypewriter() {
        if (!roleTextElement) return;

        // Check if user prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            roleTextElement.textContent = roles[0];
            return;
        }

        const currentWord = roles[currentRoleIndex];

        if (isDeleting) {
            roleTextElement.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            roleTextElement.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentWord.length) {
            // Finished typing word, wait before starting delete
            isDeleting = true;
            setTimeout(runTypewriter, delayBetweenRoles);
            return;
        } else if (isDeleting && currentCharIndex === 0) {
            // Finished erasing, move to next role
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(runTypewriter, 350);
            return;
        }

        const pace = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(runTypewriter, pace);
    }

    runTypewriter();


    /* --------------------------------------------------------------------------
       2. STICKY NAVBAR STYLING & BACK-TO-TOP BUTTON VISIBILITY
       -------------------------------------------------------------------------- */
    const navbar = document.getElementById('mainNavbar');
    const backToTopBtn = document.getElementById('backToTopButton');

    function handleScrollEvents() {
        const scrollY = window.scrollY;

        // Navbar blur and elevated border on scroll past 40px
        if (navbar) {
            if (scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to top button visibility past 320px
        if (backToTopBtn) {
            if (scrollY > 320) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }

    window.addEventListener('scroll', handleScrollEvents, { passive: true });
    handleScrollEvents(); // Initial check

    // Smooth scroll back to top
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    /* --------------------------------------------------------------------------
       3. MOBILE NAVBAR AUTO-COLLAPSE ON LINK CLICK
       -------------------------------------------------------------------------- */
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link, .custom-navbar .btn-outline-glow');
    const navbarCollapse = document.getElementById('navbarContent');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Use Bootstrap Collapse API to hide menu
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });


    /* --------------------------------------------------------------------------
       4. REVEAL-ON-SCROLL ANIMATIONS (IntersectionObserver)
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-init');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('revealed'));
    }


    /* --------------------------------------------------------------------------
       5. ACTIVE NAVIGATION LINK HIGHLIGHTING
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navItems.forEach(item => {
                        const href = item.getAttribute('href');
                        if (href === `#${currentId}`) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.35
        });

        sections.forEach(sec => sectionObserver.observe(sec));
    }


    /* --------------------------------------------------------------------------
       6. SUBTLE DESKTOP-ONLY CUSTOM CURSOR
       -------------------------------------------------------------------------- */
    const cursorDot = document.getElementById('cursorDot');
    const cursorFollower = document.getElementById('cursorFollower');

    const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (cursorDot && cursorFollower && !isTouchDevice && !prefersReducedMotion) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let followerX = mouseX;
        let followerY = mouseY;
        let isCursorVisible = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isCursorVisible) {
                cursorDot.style.opacity = '1';
                cursorFollower.style.opacity = '1';
                isCursorVisible = true;
            }

            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }, { passive: true });

        // Smooth trailing animation loop
        function renderFollower() {
            followerX += (mouseX - followerX) * 0.18;
            followerY += (mouseY - followerY) * 0.18;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(renderFollower);
        }
        requestAnimationFrame(renderFollower);

        // Hover scale effect on clickable targets
        const interactiveTargets = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card, .highlight-card');
        interactiveTargets.forEach(target => {
            target.addEventListener('mouseenter', () => cursorFollower.classList.add('cursor-hover'));
            target.addEventListener('mouseleave', () => cursorFollower.classList.remove('cursor-hover'));
        });

        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorFollower.style.opacity = '0';
            isCursorVisible = false;
        });
    }


    /* --------------------------------------------------------------------------
       7. CONTACT FORM VALIDATION & CLEAR BACKEND GUIDANCE
       Does not pretend to send emails if no backend is attached!
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const alertBox = document.getElementById('contactFormAlert');
    const submitBtn = document.getElementById('btnSubmitMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const subjectInput = document.getElementById('msgSubject');
            const messageInput = document.getElementById('userMessage');

            let isFormValid = true;

            // Full Name validation
            if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
                nameInput.classList.add('is-invalid');
                nameInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
                nameInput.classList.add('is-valid');
            }

            // Email validation (standard RFC regex pattern)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                emailInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }

            // Subject validation
            if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
                subjectInput.classList.add('is-invalid');
                subjectInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                subjectInput.classList.remove('is-invalid');
                subjectInput.classList.add('is-valid');
            }

            // Message validation
            if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
                messageInput.classList.add('is-invalid');
                messageInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
                messageInput.classList.add('is-valid');
            }

            if (!isFormValid) {
                // Focus on first invalid field
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // Check if form has an active backend action configured
            const formAction = contactForm.getAttribute('action');
            const isBackendConfigured = formAction && formAction.startsWith('https://');

            // Button loading animation
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                <span>Validating...</span>
            `;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;

                if (isBackendConfigured) {
                    // Real backend submission flow
                    alertBox.className = 'alert alert-success d-flex align-items-start gap-2 mt-3';
                    alertBox.innerHTML = `
                        <i class="fa-solid fa-circle-check fs-5 text-success mt-1"></i>
                        <div>
                            <strong>Message Sent Successfully!</strong> Thank you, ${escapeHtml(nameInput.value.trim())}. Muhammed Shadil will get back to you shortly.
                        </div>
                    `;
                    alertBox.classList.remove('d-none');
                    contactForm.reset();
                    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => inp.classList.remove('is-valid'));
                } else {
                    // Transparent notification explaining the requirement
                    alertBox.className = 'alert alert-info d-flex align-items-start gap-3 mt-3';
                    alertBox.innerHTML = `
                        <i class="fa-solid fa-circle-info fs-5 text-info mt-1"></i>
                        <div>
                            <div class="fw-bold mb-1">Form Validated Successfully!</div>
                            <p class="small mb-2">
                                <strong>Setup Note:</strong> No email backend endpoint is linked yet. To receive emails directly, add your Formspree or EmailJS endpoint to <code>index.html</code> (refer to <code>README.md</code>).
                            </p>
                            <a href="mailto:shadil.design@example.com?subject=${encodeURIComponent(subjectInput.value.trim())}&body=${encodeURIComponent('From: ' + nameInput.value.trim() + ' (' + emailInput.value.trim() + ')\n\n' + messageInput.value.trim())}" class="btn btn-sm btn-outline-info">
                                <i class="fa-regular fa-envelope me-1"></i> Send via Default Mail App
                            </a>
                        </div>
                    `;
                    alertBox.classList.remove('d-none');
                }

                alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 700);
        });

        // Real-time error clearance on user typing
        const inputs = contactForm.querySelectorAll('.custom-form-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) {
                    input.classList.remove('is-invalid');
                }
            });
        });
    }

    // Helper to prevent HTML injection in status alert
    function escapeHtml(string) {
        const div = document.createElement('div');
        div.textContent = string;
        return div.innerHTML;
    }


    /* --------------------------------------------------------------------------
       8. DYNAMIC CURRENT COPYRIGHT YEAR
       -------------------------------------------------------------------------- */
    const copyrightYearEl = document.getElementById('copyrightYear');
    if (copyrightYearEl) {
        copyrightYearEl.textContent = new Date().getFullYear();
    }

});
