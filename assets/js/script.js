window.onload = ()=>{
    const intro = document.getElementById('intro');
    const acceuilSection = document.getElementById('home-section');
    const words = document.querySelectorAll('.word');

    setTimeout(()=>{
        intro.classList.add('animation');
        setTimeout(()=>{
            intro.style.display = "none";
            acceuilSection.classList.add('show');
        },1000)
    },6000)
}


let navMenu = document.getElementById("nav-menu");
let navContent = document.querySelector(".nav-menu-content")
let navToggle =document.getElementById("nav-toggle");


/*====== sho menu ==== */
navToggle.addEventListener("click", ()=>{
    navContent.classList.toggle("open");
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("anime-toggle");
})
