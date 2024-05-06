// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});

// Project image modal
document.querySelectorAll('.project-item img').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1001';

        const modalImg = document.createElement('img');
        modalImg.src = image.src;
        modalImg.style.maxHeight = '90%';
        modalImg.style.maxWidth = '90%';
        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
