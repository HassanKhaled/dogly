let fox = document.getElementById("fox");
let foxes = document.getElementById("images");

async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();

    let newImg = document.createElement('img');
    
    newImg.src = record.image;
    
    
    newImg.setAttribute("class", "img-thumbnail rounded mx-auto d-block my-2");
    foxes.prepend(newImg);
    

}

fox.addEventListener('click', function (e) {
get();

});
