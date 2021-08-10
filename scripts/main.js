"use strict";
const head = document.querySelector(".header");
const swipeBtn = document.querySelector(".swipe");
const gridItem = document.querySelectorAll(".grid-item");
const gridImage = document.querySelectorAll(".skill-image");
const info = document.querySelectorAll(".skill-info");
const heading = document.querySelector(".heading");
const AboutPic = document.querySelector(".AboutPic");
const AboutInfo = document.querySelector(".passage");
const sideNav = document.querySelector(".sidenav");
const sideBtn = document.querySelector(".sideBtn");
const gameLoad = document.querySelector(".gameCanvas");

document.addEventListener('DOMContentLoaded', function () {
    gameLoad.classList.add("hidden");
});

function Summon(){
    sideNav.classList.toggle("animation3");
}

function Close(){
    sideNav.classList.toggle("animation4");
}

function Animate(){
    AboutPic.classList.toggle("animation1")
    AboutInfo.classList.toggle("animation2")
}

function load(){
    document.body.style.zoom="90%";
    AboutPic.classList.add("animation1")
    AboutInfo.classList.toggle("animation2")
}

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener("mouseover", (e)=>{
        info[i].classList.remove("hidden");
        gridImage[i].classList.add("hidden");
    });
    
    gridItem[i].addEventListener("mouseout", (e)=>{
        info[i].classList.add("hidden");
        gridImage[i].classList.remove("hidden");
    })
}


swipeBtn.addEventListener("click", (e)=>{
   head.classList.add("animate");
   heading.classList.add('hidden');
});




