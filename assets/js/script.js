// Menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Active nav link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header shadow
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Contact form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xyknprqa', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset();
        showPopup();
    }
});

function showPopup() {
    const popup = document.getElementById('thank-you-popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 4000);
}
