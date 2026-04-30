/**
 * E-Portfolio Interactive Features
 * - Dark Mode
 * - Scroll to Top
 * - BMI Calculator via Flask API
 * - Skills Filtering
 * - Email Notification
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeScrollToTop();
    initializeBMICalculator();
    initializeSkillFilter();
    initializeEmailButton();
});

/* =========================================
   DARK MODE
   ========================================= */
function initializeTheme() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-switch';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = '🌓';

    document.body.appendChild(themeToggle);

    // Restore saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        const currentTheme = document.body.classList.contains('dark-theme')
            ? 'dark'
            : 'light';

        localStorage.setItem('theme', currentTheme);
    });
}

/* =========================================
   SCROLL TO TOP
   ========================================= */
function initializeScrollToTop() {
    const topButton = document.createElement('button');
    topButton.id = 'backToTop';
    topButton.innerHTML = '↑';
    topButton.setAttribute('aria-label', 'Back to top');

    document.body.appendChild(topButton);

    window.addEventListener('scroll', () => {
        topButton.style.display =
            window.scrollY > 300 ? 'flex' : 'none';
    });

    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* =========================================
   BMI CALCULATOR
   ========================================= */
function initializeBMICalculator() {
    const bmiButton = document.getElementById('calculateBmiBtn');

    if (!bmiButton) return;

    bmiButton.addEventListener('click', calculateBMI);
}

async function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    try {
        const response = await fetch('/api/calculate-bmi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                height,
                weight
            })
        });

        if (!response.ok) {
            throw new Error('Server response failed.');
        }

        const result = await response.json();

        document.getElementById('bmi-value').textContent = result.bmi;
        document.getElementById('bmi-status').textContent = result.status;

        const resultBox = document.getElementById('bmi-result');
        resultBox.classList.remove('hidden');
    } catch (error) {
        console.error('BMI Error:', error);
        alert('Unable to calculate BMI. Please try again.');
    }
}

/* =========================================
   SKILL FILTER
   ========================================= */
function initializeSkillFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;

            filterButtons.forEach(btn =>
                btn.classList.remove('active')
            );

            button.classList.add('active');

            document.querySelectorAll('.skill-item').forEach(skill => {
                const matches =
                    category === 'all' ||
                    skill.dataset.category === category;

                skill.classList.toggle('hidden', !matches);
            });
        });
    });
}

/* =========================================
   EMAIL BUTTON
   ========================================= */
function initializeEmailButton() {
    const emailButton = document.getElementById('sendBtn');

    if (!emailButton) return;

    emailButton.addEventListener('click', () => {
        setTimeout(() => {
            alert('Thank you! Your email client has been opened.');
        }, 300);
    });
}