let fox = document.getElementById("fox");

async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();
fox.src=record.image;
console.log(record);

}

document.addEventListener('DOMContentLoaded', function () {
    get();
}, false);