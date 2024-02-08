import ArtPieces from "./ArtPieces.js";

export default class Photographs extends ArtPieces{

    constructor(title, medium, image, artist) {
        super("photograph", title, medium, image, artist);
  }
  }