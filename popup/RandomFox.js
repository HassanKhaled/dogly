const api = `https://randomfox.ca/floof/`;


class Fox{

constructor(image, link){

    this.image = image;
    this.link=link;

    }
}

export  async function getFox(x) {

   let res = await fetch(api);
   let  record = await  res.json();
   let fox = new Fox(record.image, record.link);


    let newImg = document.createElement('img');
    newImg.src = fox.image;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");


    x.prepend(newImg);
}
