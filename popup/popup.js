let button = document.getElementById("fox");
let foxes = document.getElementById("images");

let loader = document.getElementById("loader");
let core = document.getElementById("main");
core.style.display = "none";
//loader.style.display="none";


setInterval(()=>{
    core.style.display = "block";
    loader.style.display="none";


}, 2000)
async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();

    let newImg = document.createElement('img');
    
    newImg.src = record.image;
    
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");
    foxes.prepend(newImg);
    

}

button.addEventListener('click', function (e) {
get();

});
