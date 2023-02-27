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


// comparision page

function dish01() {
    let select01 = document.getElementById("select1").selectedIndex;
    let select02 = document.getElementById("select2").selectedIndex;

    if (select01 === select02) {
        alert("You Are Not Selected Same Dishes");
        document.getElementById("img1").src = "images/emty image 01.png";
        document.getElementById("dishName1").innerHTML = "N/A";
        document.getElementById("dishPrice1").innerHTML = "N/A";
        document.getElementById("dishDes1").innerHTML = "N/A";
    }

    else if (select01 == 1) {
        document.getElementById("img1").src = "images/gallery img 08.avif";
        document.getElementById("dishName1").innerHTML = "Vegeterian";
        document.getElementById("dishPrice1").innerHTML = "RS: 800";
        document.getElementById("dishDes1").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore aut recusandae.";
    }

    else if (select01 == 2) {
        document.getElementById("img1").src = "images/gallery img 01.avif";
        document.getElementById("dishName1").innerHTML = "Non Vegeterian";
        document.getElementById("dishPrice1").innerHTML = "RS: 1800";
        document.getElementById("dishDes1").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select01 == 3) {
        document.getElementById("img1").src = "images/gallery img 03.avif";
        document.getElementById("dishName1").innerHTML = "Sweet Dishes";
        document.getElementById("dishPrice1").innerHTML = "RS: 4500";
        document.getElementById("dishDes1").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select01 == 4) {
        document.getElementById("img1").src = "images/gallery img 07.avif";
        document.getElementById("dishName1").innerHTML = "Fast Food";
        document.getElementById("dishPrice1").innerHTML = "RS: 700";
        document.getElementById("dishDes1").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select01 == 5) {
        document.getElementById("img1").src = "images/gallery img 02.avif";
        document.getElementById("dishName1").innerHTML = "Mix Food";
        document.getElementById("dishPrice1").innerHTML = "RS: 4000";
        document.getElementById("dishDes1").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

}



function dish02() {
    let select01 = document.getElementById("select1").selectedIndex;
    let select02 = document.getElementById("select2").selectedIndex;

    if (select02 === select01) {
        alert("You Are Not Selected Same Dishes");
        document.getElementById("img2").src = "images/emty image 01.png";
        document.getElementById("dishName2").innerHTML = "N/A";
        document.getElementById("dishPrice2").innerHTML = "N/A";
        document.getElementById("dishDes2").innerHTML = "N/A";
    }

    else if (select02 == 1) {
        document.getElementById("img2").src = "images/gallery img 08.avif";
        document.getElementById("dishName2").innerHTML = "Vegeterian";
        document.getElementById("dishPrice2").innerHTML = "RS: 800";
        document.getElementById("dishDes2").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore aut recusandae.";
    }

    else if (select02 == 2) {
        document.getElementById("img2").src = "images/gallery img 01.avif";
        document.getElementById("dishName2").innerHTML = "Non Vegeterian";
        document.getElementById("dishPrice2").innerHTML = "RS: 1800";
        document.getElementById("dishDes2").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select02 == 3) {
        document.getElementById("img2").src = "images/gallery img 03.avif";
        document.getElementById("dishName2").innerHTML = "Sweet Dishes";
        document.getElementById("dishPrice2").innerHTML = "RS: 4500";
        document.getElementById("dishDes2").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select02 == 4) {
        document.getElementById("img2").src = "images/gallery img 07.avif";
        document.getElementById("dishName2").innerHTML = "Fast Food";
        document.getElementById("dishPrice2").innerHTML = "RS: 700";
        document.getElementById("dishDes2").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

    else if (select02 == 5) {
        document.getElementById("img2").src = "images/gallery img 02.avif";
        document.getElementById("dishName2").innerHTML = "Mix Food";
        document.getElementById("dishPrice2").innerHTML = "RS: 4000";
        document.getElementById("dishDes2").innerHTML = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS DOLORE AUT RECUSANDAE.";
    }

}


// contact frm

function frmContact() {
    let nameUser = document.getElementById("nameID").value;
    let nameUserBrd = document.getElementById("userIDbrdClr");
    let userErrorP = document.getElementById("errorUserP");

    let emailUser = document.getElementById("emailID").value;
    let emailUserBrd = document.getElementById("emailIDbrdClr2");
    let emailErrorP = document.getElementById("errorUserP2");

    let subUser = document.getElementById("subjectID").value;
    let subUserBrd = document.getElementById("subjectIDbrdClr");
    let subrErrorP = document.getElementById("errorUserP3");

    if (nameUser === "") {
        nameUserBrd.style.border = "2px solid red";
        userErrorP.innerHTML = "*This Field is Required";

        return false
    }

    else if (emailUser === "") {
        emailUserBrd.style.border = "2px solid red";
        emailErrorP.innerHTML = "*This Field is Required";

        return false
    }

    else if (subUser === "") {
        subUserBrd.style.border = "2px solid red";
        subrErrorP.innerHTML = "*This Field is Required";

        return false
    }

    else {
        alert("Your Form is Submit ...! ThankYou")
    }
}