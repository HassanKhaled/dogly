let fox = document.getElementById("fox");

async function get(){

res = await fetch(`https://randomfox.ca/floof/`);
record = await res.json();
fox.src=record.image;
console.log(record);

}



fox.addEventListener('click', function (e) {

    get();
});

document.addEventListener('DOMContentLoaded', function () {
    get();
}, false);