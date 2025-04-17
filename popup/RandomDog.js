const api = `https://dog.ceo/api/breeds/image/random/Fetch`;

const breed_api = `https://dog.ceo/api/breeds/list/all`;

const subbreed_api = `https://dog.ceo/api/breed/hound/list`;

const list_by_breed_api = `https://dog.ceo/api/breed/${'African'}/images/random`;

class Dog{

constructor(message, status){

    this.message = message;
    this.status=status;

    }
}

export  async function getDog(x) {

   let res = await fetch(api);
   let  record = await  res.json();
    let dog = new Dog(record.message[0], record.status);
    console.log(dog);

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newImg.setAttribute("class", "frame img-thumbnail rou mx-auto d-block my-2");

    x.prepend(newImg);
}
