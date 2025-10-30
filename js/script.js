// ============================================
// Navigation Active Link
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Set active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
});

// ============================================
// FAQ Accordion
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            
            // Close other items in the same category
            const category = faqItem.parentElement;
            const otherItems = category.querySelectorAll('.faq-item');
            
            otherItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current item
            faqItem.classList.toggle('active');
        });
    });
});

// ============================================
// Scroll to Top Button
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTopBtn';
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #8B0000;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 99;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(scrollButton);

    // Show button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#A52A2A';
        this.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#8B0000';
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if mobile menu is needed
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    // Add responsive behavior for very small screens
    function checkMobileMenu() {
        if (window.innerWidth < 768) {
            // Mobile view
            nav.style.flexDirection = 'column';
        } else {
            // Desktop view
            nav.style.flexDirection = 'row';
        }
    }

    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
});

// ============================================
// Table of Contents (optional enhancement)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // You can add a table of contents feature here if needed
    // This is a placeholder for future enhancements
});

// ============================================
// Print Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Add print button if needed
    const printButton = document.createElement('button');
    printButton.id = 'printBtn';
    printButton.innerHTML = '🖨️ 印刷';
    printButton.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 99;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(printButton);

    // Show print button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            printButton.style.display = 'flex';
            printButton.style.alignItems = 'center';
            printButton.style.justifyContent = 'center';
        } else {
            printButton.style.display = 'none';
        }
    });

    // Print when button is clicked
    printButton.addEventListener('click', function() {
        window.print();
    });

    // Hover effect
    printButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#555';
        this.style.transform = 'scale(1.1)';
    });

    printButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#333';
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// Lazy Loading for Images (if needed)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// Form Validation (if needed)
// ============================================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// ============================================
// Utility Functions
// ============================================

// Get current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('ja-JP');
}

// Format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Log page load time
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page loaded in ' + loadTime + 'ms');
});

// ============================================
// Accessibility Enhancements
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    // Ensure proper focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns if needed
            const activeElement = document.activeElement;
            if (activeElement) {
                activeElement.blur();
            }
        }
    });
});

// ============================================
// Participants Modal
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const participantsBtn = document.getElementById('participantsBtn');
    const participantsModal = document.getElementById('participantsModal');
    const closeModal = document.getElementById('closeModal');

    // Open modal
    if (participantsBtn) {
        participantsBtn.addEventListener('click', function() {
            participantsModal.style.display = 'block';
        });
    }

    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            participantsModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === participantsModal) {
            participantsModal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && participantsModal.style.display === 'block') {
            participantsModal.style.display = 'none';
        }
    });
});

console.log('Script loaded successfully');

// ============================================
// Mobile Navigation (Hamburger Menu)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        // ハンバーガーアイコンをクリックした時の処理
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            this.classList.toggle('active');
        });

        // メニューのリンクをクリックした時にメニューを閉じる
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                navToggle.classList.remove('active');
            });
        });
    }
});
