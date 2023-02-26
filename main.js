// home page slider
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 1300,
        disableoninteracton: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// let nav_bar = document.querySelector(".icon-top-mob-res-div");

// nav_bar.addEventListener("click", () => top_nav());

// let header_nav = document.querySelector(".Navbar-div-main");

// let top_nav = () => {
//     header_nav.classList.toggle("active-nav-res");
// };

// responsive navbar
function navRes() {
    let navbar_res = document.querySelector(".resDicicons");

    navbar_res.addEventListener("click", () => nav_top());

    let top_navbar = document.querySelector(".navbarmainDiv");

    let nav_top = () => {
        top_navbar.classList.toggle("activeNavbar")
    }

}


// footer email 
function btnFooter() {
    let footerEmail = document.getElementById("footerEmailid").value;
    let footerBrdclrDiv = document.getElementById("footerDivBRDclr");
    let footerPerror = document.getElementById("errorFooterP")

    if (footerEmail === "") {
        footerPerror.innerHTML = "*This Field is a Required"
        footerBrdclrDiv.style.border = "2px solid red"

        return false;
    }

    else {
        footerPerror.innerHTML = ""
        footerBrdclrDiv.style.border = "2px solid gray"
    }
}