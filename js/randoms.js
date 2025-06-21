import { getDog, createNavBarDynmically,randomDogsByNumber } from './RandomDog.js';

let button = document.getElementById("generate");
let images = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
let breed = document.getElementById("breed");
let subbreed = document.getElementById("subbreed");
let number = document.getElementById("number");
core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


button.addEventListener('click', function (e) {
button.disabled = true;

randomDogsByNumber(number.value);
button.disabled = false;


});




addEventListener("DOMContentLoaded", (event) => { 

    createNavBarDynmically(document.getElementById("navbar"),"Randoms");
});
