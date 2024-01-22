
//import Car from "./Car.js";
//import Motorcycle from "./Motorcycle.js";

//const data = {
    //cars: [
   // {
        //brand:"Ferrari",
        //speed: 200,
    //},
    //{
    //brand:"Fiat",
    //speed: 50,
    //},
    //],   
    //motorcycles: [
    //{
        //brand: "Ducatti",
        //speed: 400,
    //},
    //{
        //brand: "Kawazaki",
       // speed: 500,
    //},
    //],
//};

    //const vehicles = [];
    //window.onload = () => {
    //console.log("window loaded");
    //const nav = document.querySelector("nav");

    //const createUL = (name,data) => {
        //const ul = document.createElement("ul");
        //const title = document.createElement("li");
        //title.innerText = name;
        //ul.appendChild(title);
        //console.log(name);
        
        //data.forEach((element) => {
            //const li = document.createElement("li");
            //const button = document.createElement("button");
            //button.onclick = (event) => {
                //switch (name) {
                    //case "cars":
                       // vehicles.push(new Car(element));
                    //break;  
                    //case "motorcycles":
                        //vehicles.push(new Motorcycle(element));
                    //break;  

                    //default:
                    //break;            }                                                                             
                //console.log(vehicles);
        //}
            //button.innerText = element.brand;
            //li.appendChild(button);
           // ul.appendChild(li);
        //});


        //nav.appendChild(ul);

    //};

    //createUL();
    //build layout
    //for (const key in data) {
        //console.log(key);
        //createUL(key, data[key]);
    
    //}
//}



 //console.log(navList);
///onst car = new Car();
///const motocycle = new Motocycle();

import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();

    
    return result;

}
const createLiContent = (item) => {


    const button = document.createElement("button");
    button.innerText = item.brand;
    //button.href ="#";

    button.onclick = () => {

        switch (item.type) {
            case "car":
            new Car (item);
                break;
            case "motorcycle":
                new Motorcycle(item);
                break;
            case "boat":
                new Boat(item);
                break;
        }
    }

    return button;

}

const createList = (data) => {

    const ul = document.querySelector("ul");
    data.forEach(item => {
        const li = document.createElement("li");
        //li.innerText = >a< + item.brand + </a>
        //const li = ""<li>" +item.brand +"</li">;
        //ul.ineerHTML += "<'li style ="color:green'>" + item.brand + '</li>';
        li.appendChild (createLiContent(item));
        ul.appendChild(li);
    });
}

window.onload = async () => {

   
    const data = await loadData("data.json");
    const sortedData = data.sort((a,b) => a.type.localeCompare(b.type));

    const ul = createList(data);

   
}