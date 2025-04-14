class Fox{

constructor(image, link){

    this.image = image;
    this.link=link;

    }
}


export  async function getFox(x) {

   let res = await fetch(`https://randomfox.ca/floof/`);
   let  record = await res.json();
console.log(record);
    let newImg = document.createElement('img');
    newImg.src = record.image;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");


    x.prepend(newImg);
}
