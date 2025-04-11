let fox = document.getElementById("fox");
let foxes = document.getElementById("images");

async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();
//fox.src = record.image;
    let newImg = document.createElement('img');
    
    newImg.src = record.image;
    
    
    newImg.setAttribute("class", "img-thumbnail rounded my-2");
    foxes.prepend(newImg);
    

}

fox.addEventListener('click', function (e) {
get();
    // let newImg = document.createElement('img');
    // get().then(x => {
    //     newImg.src = x;
    //  });
    
    
    // newImg.setAttribute("class", "img-thumbnail rounded my-2");
    // foxes.prepend(newImg);
});

document.addEventListener('DOMContentLoaded', function () {
    get();
}, false);