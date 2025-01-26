let navMenu = document.getElementById("nav-menu");
let navContent = document.querySelector(".nav-menu-content")
let navToggle =document.getElementById("nav-toggle");


/*====== sho menu ==== */
navToggle.addEventListener("click", ()=>{
    navContent.classList.toggle("open");
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("anime-toggle");
})