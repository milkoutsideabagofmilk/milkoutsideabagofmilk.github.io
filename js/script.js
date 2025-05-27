// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при прокрутке
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.skill');
    const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(skillsSectionPosition < screenPosition) {
        skills.forEach(skill => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        });
    }
});

// Инициализация анимации навыков
document.querySelectorAll('.skill').forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Обработка формы
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
        this.reset();
    });
}

// Меню для мобильных устройств
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});