let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section = document.querySelector("section");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

navbar.addEventListener("click", function(){
    navbar.classList.remove("active");
});

section.addEventListener("click", function(){
    navbar.classList.remove("active");
});

window.onscroll = ()=>{
    navbar.classList.remove("active");
};