import ArtPieces from "./ArtPieces.js";

export default class Sculptures extends ArtPieces{

    constructor(title, medium, image, artist) {
        super("sculpture", title, medium, image, artist);
  }
  }