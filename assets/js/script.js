
let navMenu = document.getElementById("nav-menu");
let navContent = document.querySelector(".nav-menu-content")
let navToggle =document.getElementById("nav-toggle");


/*====== sho menu ==== */
navToggle.addEventListener("click", ()=>{
    navContent.classList.toggle("open");
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("anime-toggle");
})
/*=========== ANIMATION SCROLL ===========*/
//function to check if the elements are in the view port
function isInView(element){
    const rect = element.getBoundingClientRect();
    return rect.top >=0 && rect.bottom <= window.innerHeight;
}
//applied animation to elements if they are in the view port
function animationScrol(){
    const boxs = document.querySelectorAll(".box");
    boxs.forEach(box => {
        if(isInView(box)){
            if(box.classList.contains("box")){
                box.classList.add('anime');
            }else if(box.classList.contains('from-top')){
                box.style.transform = "translateY(0)";
                box.classList.add("top")
            }else if(box.classList.contains('zoom-in')){
                box.style.transform = "translateY(0)";
                box.classList.add("zoom")
            } 
        }
    }); 
}
/*=== initial call to check if the elements are in view ===*/
animationScrol();
/*===== listen to the scroll event ====*/
window.addEventListener("scroll", animationScrol);

