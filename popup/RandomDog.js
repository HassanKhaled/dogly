const api = `https://dog.ceo/api/breeds/image/random/Fetch`;

const breed_api = `https://dog.ceo/api/breeds/list/all`;

const subbreed_api = `https://dog.ceo/api/breed/${'hound'}/list`;

const random_by_breed_api = `https://dog.ceo/api/breed/${'retriever'}/images/random`;

class Dog{

constructor(message, status){

    this.message = message;
    this.status=status;

    }
}

 class Breed {


    constructor(breed,subreed){

        this.breed = breed;
        this.subreed =subreed;
    }


}

async function listSubbreed(){

    let res = await fetch(subbreed_api);
    let record = await res.json();
    console.log(record);
}

export async function listBreed(x){

    let res = await fetch(breed_api);
    let record = await res.json();
 // console.log(record.message);

    for (const [key, value] of Object.entries(record.message)) {
     //   console.log(`${key}: ${value}`);

        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        x.appendChild(opt);
    }

    

}

async function randomByBreed(){

    let res = await fetch(random_by_breed_api);
    let record = await res.json();
    console.log(record);
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
