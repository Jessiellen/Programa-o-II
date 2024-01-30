import Animal from "./Animal.js";

export default class Mammal extends Animal {

    #numLegs;
    constructor(name) {
        super(name);

        this.#numLegs = this.#numLegs;
}

    walk() {
        return this.introduce() + "walking on" + this.#numLegs + "legs";
    }
}