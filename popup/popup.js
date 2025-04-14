import { get } from './RandomFox.js';

let button = document.getElementById("fox");
let foxes = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
core.style.display = "none";
//loader.style.display="none";


setInterval(()=>{
    core.style.display = "block";
    loader.style.display="none";


}, 2000);


button.addEventListener('click', function (e) {
get(foxes);

});
