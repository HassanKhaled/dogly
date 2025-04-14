class Fox{

constructor(image, link){

    this.image = image;
    this.link=link;

    }
}


export  async function getFox(x) {

   let res = await fetch(`https://randomfox.ca/floof/`);
   let  record = await  res.json();
    let fox = new Fox(record.image,record.link);
    console.log(fox);
    let newImg = document.createElement('img');
    newImg.src = fox.image;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");


    x.prepend(newImg);
}
