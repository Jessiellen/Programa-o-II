import Gallery from "./Gallery.js.js";


window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const gallery = new Gallery((ArtPieces) => {
       document.querySelector("h1").innerText = ArtPieces.introduce();
});
    result.forEach(item => {
       gallery.addArtPieces(item);
});

}