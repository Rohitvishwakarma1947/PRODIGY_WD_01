const navbar = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navItems = document.querySelectorAll(".navbar a");

navItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#666";
        this.style.color = "white";
    });
    item.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});