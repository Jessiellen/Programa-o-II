// import Bird from "./Bird.js";
// import Mammal from "./Mammal.js";
// import Reptile from "./Reptile.js";

// export default class Zoo {

//     #animals;
//     #callback;
//     #currentAnimal = null;
//     constructor(callback) {
//         this.#animals = [];
//         this.#callback = callback;
// export default class Zoo {
//     }

//     #performAnimal(animal) {
//         if(this.#currentAnimal) {
//             this.#currentAnimal.active = false;
//         }

//         this.#currentAnimal = this.#animals.find(anim => anim.name === animal.name);
//         this.#currentAnimal.active = true;
//         document.querySelector("h2").innerText = this.#currentAnimal.name;

//         this.#callback(animal);
//     }
