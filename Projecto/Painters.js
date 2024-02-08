import ArtPieces from "./ArtPieces.js";

export default class Painters extends ArtPieces{

    constructor(title, medium, image, artist) {
      super("painter", title, medium, image, artist);
}
}