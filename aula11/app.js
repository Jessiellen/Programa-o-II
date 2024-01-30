import Bird from "./Bird.js";
import Mammal from "./Mammal.js";
import Reptile from "./Reptile.js";
import Zoo from "./Zoo.js";

window.onload = () => {

    const request = await fetch("data.json");
    const resuolt = await request.json();

    console.log(result);

    //const seagull = new Bird('seagull',true);
    //console.log(seagull.fly());

    //const chicken = new Bird('chicken', false);
   // console.log(chicken.fly());

    //const horse = new Mammal('horse', 4);
    //console.log(horse.walk());

   // const hipoppotomus = new Mammal('hipoppotomus', 4);
    //console.log(hipoppotomus.walk());

    //onst crocodile = new Reptile ("crocodile", true);
    //console.log(crocodile.bite());

   // const gecko = new Reptile ("gecko", false);
    //console.log(gecko.bite());


    const zoo = new Zoo ();
    result.forEach(item => {

        switch(item,type) {
            case "bird":
                animal= new Bird (item.name, item.canFly);
            break;

            case "mammal":
                animal= new Mammal (item.name, item.numLegs);
            break;
            case "reptile":
                animal= new Reptale (item.name, item.isAgressive);

            break;

            default: 
                break;
        }
    }
    )}

        
    // Zoo.addAnimal(seagull);
    // Zoo.addAnimal(chicken);
    // Zoo.addAnimal(horse);
    // Zoo.addAnimal(hipoppotomus);
    // Zoo.addAnimal(crocodile);
    // Zoo.addAnimal(gecko);
    zoo.addAnimals(animal);
    zoo.showAnimals();

  


}