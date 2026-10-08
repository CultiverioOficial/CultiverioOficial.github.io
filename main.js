const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuitems = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

menuIcon.addEventListener("click", () => {
    mobileMenuitems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuitems.classList.remove("active");
});

allMobileMenuLinks.forEach(l => {
    l.addEventListener("click", () => {
        mobileMenuitems.classList.remove("active");
    })
})