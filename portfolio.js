document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelector("nav a");

    for(const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll ({
            top: offsetTop - 70,
            behavior:"smooth",
        });
    }
});


document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");

    let currentSectionIndex = 0;
    for (let i=0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 100) {
            currentSectionIndex = i;
        }
    }

    const activeLink = navbar.querySelector(".active");
    if (activeLink) {
        activeLink.classList.remove("active");
    }

    const newActiveLink = navbar.querySelectorAll("a")[currentSectionIndex];
    newActiveLink.classList.add("active");
});
