type Scientist = {
    name: string,
    age: number,
    minions: number,
    description: string
}

const arrScientists: Scientist[] =[
    {
        name: "Greger",
        age: 34,
        minions: 2,
        description: "Evil overlord with two sidekicks."

    },
    {
        name: "Hans",
        age: 215,
        minions: 23,
        description: "Alien friendly"

    },
    {
        name: "Berit",
        age: 215,
        minions: 23,
        description: "Alien friendly"

    },
];


let myDiv = document.getElementById("scientistListDiv") as HTMLDivElement;

function getScientistName(){
    for(const scientist of arrScientists){
        const scientistList = document.createElement("div");
        scientistList.innerHTML = scientist.name;
        scientistList.style.border ="2px solid black"
        myDiv.append(scientistList);
        console.log(scientist);
    } 
}

getScientistName();