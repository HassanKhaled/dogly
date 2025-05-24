import { getDog, listBreed, listSubbreed , clearOptions, randomBySubBreed , testApis, getDogsByNumberBreedSubbreed ,createNavBarDynmically} from './RandomDog.js';

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
 
    if(breed.value=="Select Breed" || subbreed.value=="Select sub-Breed" || subbreed.options.length == 0  ){
    
        alert("you have select breed & subbreed");
    
    }else{
        
        button.disabled = true;
        randomBySubBreed(breed.value,subbreed.value,images);
        button.disabled = false;
    }

});


breed.addEventListener("change", ()=>{

    clearOptions(subbreed);
    listSubbreed(breed.value,subbreed)

});


addEventListener("DOMContentLoaded", (event) => { 
    createNavBarDynmically(document.getElementById("navbar"),"Subbreed");
    listBreed(breed);
 
});
