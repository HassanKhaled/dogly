import { getDog, listBreed, listSubbreed , clearOptions ,listAllBreedSubbreeds } from './RandomDog.js';



let loader = document.getElementById("loader");
let core = document.getElementById("main");
let breeds = document.getElementById("breeds");


core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


addEventListener("DOMContentLoaded", (event) => { 

    listAllBreedSubbreeds(breeds);

});
