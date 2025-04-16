const api = `https://dog.ceo/api/breeds/image/random/Fetch`;


class Dog{

constructor(message, status){

    this.message = message;
    this.status=status;

    }
}

export  async function getDog(x) {

   let res = await fetch(api);
   let  record = await  res.json();
    let dog = new Thing(record.message[0], record.status);
    console.log(dog);

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");

    x.prepend(newImg);
}
