import Animal from "./Animal.js";

export default class Birdy extends Animal {

    #canFly
    constructor(name, canFly) {
        super(name);

        this.#canFly = canFly;
    }

    fly() {

        return this.#canFly ?
        this.introduce() + " and I can fly":
        this.introduce() + "and I can't fly"

    }
}