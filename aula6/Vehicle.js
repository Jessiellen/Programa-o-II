export default class Vehicle {
   
    speed = 10;
    brand;
    imagePath;

    construtor (data) {
        this.speed =data.speed;
        this.brand = data.speed;
        this.imagePath = data.image;

        this.build();
    }

    build() {
        const img = document.createElement("img");
        img.src = this.image.Path;

        document.body.appendChild(img);
    }
}