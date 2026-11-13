
// ======================================
// BOND & BLOOM - RESPONSIVE JAVASCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    // Create mobile overlay
    const overlay = document.createElement("div");
    overlay.classList.add("sidebar-overlay");
    document.body.appendChild(overlay);


    // OPEN AND CLOSE SIDEBAR
    function openSidebar() {
        sidebar.classList.add("show");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeSidebar() {
        sidebar.classList.remove("show");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    function toggleSidebar() {
        if (sidebar.classList.contains("show")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // Mobile menu button
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", toggleSidebar);
    }

    // Close menu when overlay is clicked
    overlay.addEventListener("click", closeSidebar);


    // CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            if (window.innerWidth <= 700) {
                closeSidebar();
            }
        });
    });


    // CLOSE SIDEBAR WHEN SCREEN RESIZES TO DESKTOP
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeSidebar();
        }
    });


    // CLOSE MENU WITH ESCAPE KEY
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });


    // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
    document.addEventListener("touchmove", (event) => {
        if (
            document.body.classList.contains("menu-open") &&
            !sidebar.contains(event.target)
        ) {
            event.preventDefault();
        }
    }, { passive: false });


    // UPDATE CURRENT YEAR IF ELEMENT EXISTS
    const yearElement = document.querySelector(".current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
