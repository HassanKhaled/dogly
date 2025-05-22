import { getDog, listBreed, listSubbreed , clearOptions ,listAllBreedSubbreeds } from './RandomDog.js';

let button = document.getElementById("generate");
let images = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
let breed = document.getElementById("breed");
let subbreed = document.getElementById("subbreed");
let breeds = document.getElementById("breeds");


core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


addEventListener("DOMContentLoaded", (event) => { 
    
    listAllBreedSubbreeds(breeds);

});
