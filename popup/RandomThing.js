const api = `https://dog.ceo/api/breeds/image/random/Fetch`;


class Dog{

constructor(message, status){

    this.message = message;
    this.status=status;

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
