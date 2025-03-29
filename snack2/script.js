//Esercizio 2
//Creazione array object di squadre di calcio. Requisiti di proprietà: nome, punti, falli
//Inolte, "name" sarà l'unica ad essere compilata, il resto settato a 0
//Infine, ciò che è settato a 0, dovrà essere sostituito da numeri generati random

const teams= [
    {
        name: "Juventus",
        points: 0,
        fouls: 0,
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0,
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0,
    },
    {
        name: "AS Roma",
        points: 0,
        fouls: 0,
    },
    {
        name: "Parma",
        points: 0,
        fouls: 0,
    },
    {
        name: "Udinese",
        points: 0,
        fouls: 0,
    },
]

//Creazione di destrutturazione, in cui mettiamo un array i cui elementi contengono solo nomi e falli subiti

const foulsName = [];

for (let i = 0; i < teams.length; i++) {
    let message = document.getElementById("fouls_suffered");

    teams[i]["points"] = Math.floor((Math.random() * 30) +1);
    teams[i]["fouls"] = Math.floor((Math.random() * 30) +1);

    let{name, fouls} = teams[i];
    foulsName.push({name, fouls});

    message.innerHTML += `<li> Squadra: <strong> ${name} </strong> <br> Falli subiti: <strong> ${fouls} </strong> </li>`;
}

//Stampiamo ovviamente in console perchè siamo generosi e buoni
console.log(foulsName);