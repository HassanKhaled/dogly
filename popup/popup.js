import { getThing } from './RandomThing.js';

let button = document.getElementById("generate");
let foxes = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
core.style.display = "none";


setInterval(()=>{

    core.style.display = "block";
    loader.style.display="none";

}, 2000);


button.addEventListener('click', function (e) {

    getThing(foxes);

});
