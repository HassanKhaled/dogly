import { getDog, listBreed, listSubbreed , clearOptions, randomBySubBreed } from './RandomDog.js';

let button = document.getElementById("generate");
let images = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
let breed = document.getElementById("breed");
let subbreed = document.getElementById("subbreed");

core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


button.addEventListener('click', function (e) {
button.disabled = true;
randomBySubBreed(breed.value,subbreed.value,images);
button.disabled = false;


});


breed.addEventListener("change", ()=>{

    clearOptions(subbreed);
    listSubbreed(breed.value,subbreed)

});


addEventListener("DOMContentLoaded", (event) => { 

    listBreed(breed);
 
});
