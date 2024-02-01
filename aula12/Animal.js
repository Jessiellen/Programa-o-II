// #name;
// #callback;
// #imageElem;
// constructor({name, image}, callback) {
//     this.#name = name;
//     this.#callback = callback;

//     const img = document.createElement("img");
//     img.src = image;
//     img.onclick = () => this.#callback();
//     document.body.appendChild(img);
//     this.#imageElem = document.createElement("img");
//     this.#imageElem.src = image;
//     this.#imageElem.onclick = () => this.#callback();

//     const container = document.querySelector("#images-container");
//     container.appendChild(this.#imageElem);
// }

// introduce() {
// @@ -22,4 +25,11 @@ export default class Animal {
// set name(value) {
//     this.#name = value;
// }

// get active() {
//     return this.#imageElem.className.length !== 0;
// }
// set active(value) {
//     this.#imageElem.className = value ? 'active' : '';
// }
// }