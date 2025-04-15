const api = `api-url`;


class Thing{

constructor(image, link){

    this.image = image;
    this.link=link;

    }
}

export  async function getThing(x) {

   let res = await fetch(api);
   let  record = await  res.json();
   let thing = new Thing(record.image, record.link);


    let newImg = document.createElement('img');
    newImg.src = thing.image;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");


    x.prepend(newImg);
}
