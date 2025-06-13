import {  listBreed,  randomByBreed , createNavBarDynmically,getAllImageOfBreed } from './RandomDog.js';

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


    if(breed.value!="Select Breed"){
button.disabled = true;

console.log(breed.value);
randomByBreed(breed.value,images)
 
button.disabled = false;

    }else{

        alert("Error Error Error");
    }

});


addEventListener("DOMContentLoaded", (event) => { 
    createNavBarDynmically(document.getElementById("navbar"),"Breed");
    listBreed(breed);
  
});
