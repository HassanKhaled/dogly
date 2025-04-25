import { getDog, listBreed } from './RandomDog.js';

let button = document.getElementById("generate");
let images = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
let breed = document.getElementById("breed");

core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


button.addEventListener('click', function (e) {
button.disabled = true;
    getDog(images);
button.disabled = false;

  listBreed(breed);
});
