import Musicians from "./Musicians.js";
import Painters from "./Painters.js";
import Photographs from "./Photographs.js";
import Sculptures from "./Sculptures.js";

 export default class Gallery {

     #ArtPieces;
     #callback;
     constructor(callback) {
         this.#ArtPieces = [];
         this.#callback = callback;
     }

     addArtPieces(ArtPieces) {
         let nextArtPieces = null;
         switch (ArtPieces.type) {
             case "painters":
                 nextArtPieces = new Painters(ArtPieces, () => this.#ArtPieces(nextArtPieces));
                 break;
             case "musicians":
                nextArtPieces = new Musicians(ArtPieces, () => this.#ArtPieces(nextArtPieces));
                 break;
             case "photographs":
                nextArtPieces = new Photographs(ArtPieces, () => this.#ArtPieces(nextArtPieces));
                 break;
             case "sculptures":
                nextArtPieces = new Sculptures(ArtPieces, () => this.#ArtPieces(nextArtPieces));
                 break;
             default:
                 break;
        }
        if (this.#ArtPieces.length < galleryCapacity) {
            this.#ArtPieces.push(nextArtPieces);
        } else {
            console.log('A galeria está cheia.');
        }
    }
}