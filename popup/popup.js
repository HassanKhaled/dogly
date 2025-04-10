let fox = document.getElementById("fox");
let foxes = document.getElementById("images");

async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();
fox.src = record.image;

    return fox.src;

}

fox.addEventListener('click', function (e) {
    let newImg = document.createElement('img');
    get().then(x => {
        newImg.src = x;
     });
    
    
    newImg.setAttribute("class", "img-fluid rounded mx-auto d-block my-2");
    foxes.prepend(newImg);
});

document.addEventListener('DOMContentLoaded', function () {
    get();
}, false);