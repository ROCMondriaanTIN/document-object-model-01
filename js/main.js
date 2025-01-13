const title = "Planeten";
const subTitle = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];

const h1Element = document.querySelector(".title");
h1Element.textContent = "Planeten";

const text = document.querySelector("p");
text.textContent = "Alles over planeten";


const textTwo = document.querySelector(".ol");
textTwo.innerHTML = "";
for(let i = 0; i < planets.length; i++){
    const planet = planets[i];
    textTwo.innerHTML += `<li> ${planet} </li>`;
}


function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}