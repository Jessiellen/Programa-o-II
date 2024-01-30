export default class Zoo {

    #animals;
    constructor() {
        this.#animals = [];
    }

    assAnimal(animal) {
        this.#animals.push(animal);
    }

    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        })
    }
}