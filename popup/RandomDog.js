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

export function clearOptions(selectElement) {

     var i, L = selectElement.options.length - 1;
     for (i = L; i >= 0; i--) {
         selectElement.remove(i);
     }
}

export async function listSubbreed(breed = 'hound',subbreed){

    let res = await fetch(`https://dog.ceo/api/breed/${breed}/${subreed}/images`);
    let record = await res.json();


    for (let x = 0; x < record.message.length; x++) {

        let temp = record.message[x];

        var opt = document.createElement('option');
        opt.value = temp;
        opt.innerHTML = temp;
        subbreed.appendChild(opt);
    }
    
}

export async function listBreed(x){

    let res = await fetch(breed_api);
    let record = await res.json();

    for (const [key, value] of Object.entries(record.message)) {
    let breed = new Breed(key,value);
  

        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        x.appendChild(opt);
    }

}

async function randomByBreed(){

    let res = await fetch(random_by_breed_api);
    let record = await res.json();
  
}

export  async function getDog(x) {
    
   let res = await fetch(api);
   let  record = await  res.json();
   let dog = new Dog(record.message[0], record.status);
  
    let newFig = document.createElement("figure");
    newFig.setAttribute("class","figure mx-auto d-block my-2");

    let newFigCap = document.createElement("figcaption")
    newFigCap.setAttribute("class","figure-caption");
    newFigCap.innerHTML=dog.message;

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newFig.append(newImg);
    newFig.append(newFigCap);
    //newImg.setAttribute("class", "frame img-thumbnail rou mx-auto d-block my-2");
    newImg.setAttribute("class","figure-img img-fluid rounded mx-auto d-block my-2");

    x.prepend(newFig);
}
