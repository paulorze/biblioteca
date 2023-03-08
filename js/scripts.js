// Hamburguer Navbar
const icon = document.querySelector('.header__navbar__icon');
const navLinks = document.querySelector('.header__navbar__ul');
const links = document.querySelectorAll('.header__navbar__ul__li');

icon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});