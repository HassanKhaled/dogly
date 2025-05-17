const api = `https://dog.ceo/api/breeds/image/random/Fetch`;

const breed_api = `https://dog.ceo/api/breeds/list/all`;

const subbreed_api = `https://dog.ceo/api/breed/${'hound'}/list`;

const random_by_breed_api = `https://dog.ceo/api/breed/${'retriever'}/images/random`;

const random_by_sub_breed_api = `https://dog.ceo/api/breed/hound/afghan/images/random`;

const list_all_api_breed_subbreed = "https://dog.ceo/api/breeds/list/all";

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

export async function getDogsByNumberBreedSubbreed(breed="hound",subbreed="afghan", num){

    
    let res = await fetch(`https://dog.ceo/api/breed/${breed}/${subbreed}/images/random/${num}`);
    let record = await res.json();
console.log(record);
}

export async function getAllImageOfBree(breed="afghan"){
    let res = await fetch(`https://dog.ceo/api/breed/hound/${breed}/images`);
    let record = await res.json();
console.log(record);
    
}

export async function randomDogsByNumber(num){
    let res = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`);
    let record = await res.json();
console.log(record);

}

 export async function testApis(){

    let res = await fetch(list_all_api_breed_subbreed);
    let record = await res.json();
console.log(record);
}

export function clearOptions(selectElement) {

     var i, L = selectElement.options.length - 1;
     for (i = L; i >= 0; i--) {
         selectElement.remove(i);
     }
}

export async function listSubbreed(breed,subbreed){
  
    let res = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
    let record = await res.json();

    if(record.code =="404"){

       subbreed.disabled = true;
    }else{
        subbreed.disabled = false;
  

    for (let x = 0; x < record.message.length; x++) {

        let temp = record.message[x];
        var opt = document.createElement('option');
        opt.value = temp;
        opt.innerHTML = temp;
        subbreed.appendChild(opt);
    }
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


export async function randomBySubBreed(breed,subbreed,images){

    let res = await fetch( `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`);
    let record = await res.json();
    let dog = new Dog(record.message, record.status);

   
    getRandomDogBySubBreed(dog, images);
}

export async function randomByBreed(breed,images){

    let res = await fetch( `https://dog.ceo/api/breed/${breed}/images/random`);
    let record = await res.json();
    let dog = new Dog(record.message, record.status);

   
    getRandomDogByBreed(dog, images);
}

export function getRandomDogBySubBreed(dog, images){

    let newHr = document.createElement("hr");

    let newFig = document.createElement("figure");
    newFig.setAttribute("class", "figure mx-auto d-block my-2");

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newFig.append(newImg);
    newFig.append(newHr);
    newImg.setAttribute("class", "figure-img img-fluid rounded mx-auto d-block my-2 shadow");

    images.prepend(newFig);


}




export function getRandomDogByBreed(dog, images){

    let newHr = document.createElement("hr");

    let newFig = document.createElement("figure");
    newFig.setAttribute("class", "figure mx-auto d-block my-2");

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newFig.append(newImg);
    newFig.append(newHr);
    newImg.setAttribute("class", "figure-img img-fluid rounded mx-auto d-block my-2 shadow");

    images.prepend(newFig);


}

export  async function getDog(x) {
    
   let res = await fetch(api);
   let  record = await  res.json();
   let dog = new Dog(record.message[0], record.status);
    let newHr = document.createElement("hr");
  
    let newFig = document.createElement("figure");
    newFig.setAttribute("class","figure mx-auto d-block my-2");
    
    let newFigCap = document.createElement("figcaption")
    newFigCap.setAttribute("class","figure-caption text-center rou");
    newFigCap.innerHTML = dog.message.split("/")[4];

    let newImg = document.createElement('img');
    newImg.src = dog.message;
    newFig.append(newImg);
    newFig.append(newFigCap);
    newFig.append(newHr);
    
    
    newImg.setAttribute("class","figure-img img-fluid rounded mx-auto d-block my-2 shadow");

    x.prepend(newFig);
}
