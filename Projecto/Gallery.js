import Musicians from "./Musicians.js.js";
import Painters from "./Painters.js.js";
import Photographs from "./Photographs.js.js";
import Sculptures from "./Sculptures.js.js";

 export default class Gallery {

     #ArtPieces;
     #callback;
     #currentArtPieces = null;
     constructor(callback) {
         this.#ArtPieces = [];
         this.#callback = callback;
     }

     addArtPieces(ArtPieces) {
         let nextArtPieces = null;
         switch (ArtPieces.type) {
             case "painters":
                 nextArtPieces = new Painters(ArtPieces, () => this.#performArtPieces(nextArtPieces));
                 break;
             case "musicians":
                nextArtPieces = new Musicians(ArtPieces, () => this.#performArtPieces(nextArtPieces));
                 break;
             case "photographs":
                nextArtPieces = new Photographs(ArtPieces, () => this.#performArtPieces(nextAnimal));
                 break;
             case "sculptures":
                nextArtPieces = new Sculptures(ArtPieces, () => this.#performArtPieces(nextAnimal));
                 break;
             default:
                 break;
         }
         this.#ArtPieces.push(nextArtPieces);
     }

     #performArtPieces(ArtPieces) {
         if(this.#currentArtPieces) {
             this.#currentArtPieces.active = false;
         }

         this.#currentArtPieces = this.#ArtPieces.find(anim => anim.name === ArtPieces.name);
         this.#currentArtPieces.active = true;
        
         this.#callback(ArtPieces);
     }

     showA() {
         this.#ArtPieces.forEach(this.#ArtPieces => {
            console.log(this.#ArtPieces.introduce())
        });
     }

     getArtPieces(name) {
         return this.#ArtPieces.find(this.#ArtPieces => this.#ArtPieces.name === name);
}

    static ArtPieces() {

         return "This is my gallery!";
}
}
