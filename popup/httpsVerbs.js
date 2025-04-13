export  async function get(x) {

   let res = await fetch(`https://randomfox.ca/floof/`);
   let  record = await res.json();

    let newImg = document.createElement('img');
    newImg.src = record.image;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");


    x.prepend(newImg);
}
