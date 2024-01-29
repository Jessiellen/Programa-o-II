//window.onload = () => {

  //const func = (obj) => {
   // obj.name = "joana";
   // }
    
  //const obj = {
    //name:"Jessie"
  //}
  //}

 // console.log(obj);
  //func(obj);
  //console.log(obj);

  window.onload = () => {

    const test = new Test();
    test.width= 100;
    test.height= 150;
    test.background ="red";


    const test2= new Test();
    test2.width = 200;
    test2.height = 200;
    test2.background = "blue";

    const test3= new Test();
    test3.width = 300;
    test3.height = 300;
    test3.background = "green";
    
  }

  class Test {

    #name= "test";
    #age="10";
    #gender= "male";

    #view;
    #callback;

    constructor(callback) {

      this.#callback = callback;
      this.#view= document.createElement("div");
      this.#view.className = "view";
      document.body.appendChild(this.#view);

    }

    setSize(width,heigth) {
      this.#view.style.width = width +"px";
      this.#view.style.height= heigth+ "px";
    }

    get width() {
      return this.#view.style.width.replace("px", "");
    }

    set width(value) {
      this.#view.style.width = value +"px";
    }

    get height() {
      return this.#view.style.height.replace("px", "");
    }

    set height(value) {
      this.#view.style.height = value +"px";
    }
   
    getName () {
        return this.#name;
      }
    getAge() {
        return this.#age;
      }

    getGender () {
        return this.#gender;
      }
  }

    setName(value) {
    this.#name = value;
  }

    setAge(value) {
    this.#age = value;
  }

    setGender(value) {
    this.#gender = value;
   }
  


