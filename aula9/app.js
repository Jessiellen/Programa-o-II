//window.onload = async () => {

  //const test = new AppTest();
  //test.addEventListener('test_data_loaded', (event) =>{
      //console.log(event.detail);
  //const test2 = new AppTest2();

  //test2.subscribe('test_data_loaded', data => {
     // console.log("sub1", data)
  //})
 // /test.loadData();
  //test2.subscribe('test_data_loaded', (data) => {
      //console.log("sub2", data)
   //})
   //console.log(`**********After two subscriptions *************`)

  // test2.publish('test_data_loaded');
//})
//}

//class AppTest extends HTMLElement {
 // constructor() {
     // super();

//class AppTest2 {

  //lista de eventos
  //events = [];

  //constructor() {}

  //subscribe(eventName, handler) {

      //se nesta lista de eventos não existir o evento "test_data_loaded"
      //if(!this.events[eventName]) {
          //criar o tipo "test_data_loaded"
          //this.events[eventName] = [];
      //}
      // e adicionar à lista
      //this.events[eventName].push(handler);
  //}
  //async loadData() {
      //const req = await fetch("data.json");
      //const res = await req.json();
     // this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}));

 // unsubscribe(event, handler) {
      //if(this.events[event]) {
          //const index = this.events[event].findIndex(item => item === handler);
         // this.events[event].splice(index, 1);
      //}
  //}
//}
//customElements.define('app-test', AppTest);

  // this.events["test_load_data"] = [handler1, handler2, handler3...]

 // publish(event, data) {
      //if(this.events[event]) {
          //this.events[event].forEach(async handler => {
              //const req = await fetch("data.json");
              //const res = await req.json();
              //handler(res);
          //});
      //}
  //}
//}
  //}
//}

/////////////////////////////////////////////////////////////////////

//console.log("Jessie");
//window.onload = () => {
  //console.log("document loaded, application started")
//}

//console.log("2")

//const Somar = (a, b) = {
  //RETURN A+B;

     // const result = Somar(a+b);
      
      //console.log(result);
//}

//const Multiple = (c, d) = {
  //return c*d;
//}

    //let result = Multiple(c+d);
      
    //console.log(result);

//const MultNumbers (a, b) => {

 //const result = MultNumbers (result,2);

  //console.log(Somar(Multiple(c, d), 2));
//}
//const SomarMedia = (nums) => {
  //array = [2, 45, 34, 2];

  //const somar = array();
  //const media = somar*array.legth

  //console.log(media);
////////////////////////////////////////////////////////

 //let value = 0;
 // nums.forEach(num => {
    //value+=num;
  //})

 // return value /nums.legth;
//}
 //const result =SomarMedia(arr);
  //console.log(result);

 //array = [2, 45, 34, 2];
 
 //array.forEach(num => {
  //console.log(array[i])
 //});

 //console.log("-----");
 //for (let i =0; i <array.legth; i++) {
  //console.log(array[i]);
 //}

 //console.log("-----");
//let and = false;
//let index = o;  
//while (!end) {
 // console.log(array[index]);
  //index++;
  //end = index >= array.length;
//}

class Test = (2) => {
  return 2

  result = 2
}

console.log(result)


class Test {
  constructor() {

  }

  showNumber() {
    return 2
  }
}

console.log("-------");
console.log(new Test().showNumber());

