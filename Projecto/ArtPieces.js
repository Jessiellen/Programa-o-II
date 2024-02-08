 export default class Gallery {



     // constructor(type,title,medium,image,artist) {
     //      this.type = type,
     //      this.title = title,
     //      this.medium = medium,
     //      this.image = image,
     //      this.artist = artist;
     // }


     #callback;
     #imageElem;
     #data;
     constructor(data, callback) {

        this.#data = data;
         this.#callback = callback;

         this.#imageElem = document.createElement("img");
         this.#imageElem.src = this.#data.image;
         this.#imageElem.onclick = () => this.#callback();

         const container = document.querySelector("#");
         container.appendChild(this.#imageElem);
    }
    introduce() {
         return "" + this.#data.name;
    }

    get type() {
         return this.#data.type;
    }
    get image() {
         return this.#data.image;
    }

    get name() {
         return this.#data.name;
    }
    set name(value) {
         this.#data.name = value;
    }

    get active() {
         return this.#imageElem.className.length !== 0;
    }
    set active(value) {
         this.#imageElem.className = value ? 'active' : '';
}
}

// build(); {
//      const img = document.createElement("img");
//      img.src = this.image.Path;

//      document.body.appendChild(img);
// }