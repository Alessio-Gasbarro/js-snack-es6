//Esercizio 1
//Creazione di array object, di cui contenente le specs di una bici da corsa (nome e peso)

const bikeList = [
    {
        name: 'Graziella',
        weight: 12,
    },
    {
        name: 'Tandem',
        weight: 8,
    },
    {
        name: 'Triciclo',
        weight: 6,
    },
    {
        name: 'Mountain Bike',
        weight: 10,
    },
    {
        name: 'Velocipede',
        weight: 26,
    },
]

//Mettere in console le bici in ordine di peso (min first)

let bikeWeight = bikeList[0];

for (let i = 0; i < bikeList.length; i++){
    let bike = bikeList[i];
    if (bike["weight"] < bikeWeight["weight"]){
        bikeWeight = bike;
    }
}

console.log("La bici che pesa meno è: ", bikeWeight);

//ES-6
//Mettere in console la bici che costa meno ma usando destructuring e template literal

let message = document.getElementById("bike");
let {name, weight} = bikeWeight;

message.innerHTML = `La bici più leggera è: ${name}, e pesa solo ${weight} kg!`;