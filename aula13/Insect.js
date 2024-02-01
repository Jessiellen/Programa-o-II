import Animal from "./Animal.js";

export default class Insect extends Animal {

    #IsBlooddSucker;
    constructor(data, callback) {
        super(data, callback);

        this.#IsBlooddSucker = data.IsBloodSucker;
    }

    introduce() {

        let parentIntroduce = super.introduce();

        return this.#IsBlooddSucker ? 
        parentIntroduce + " and I'm Blood Sucker" :
        parentIntroduce + " and I'm not Blood Sucker";
    }
}