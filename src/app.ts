type Scientist = {
    name: string,
    age: number,
    minions: number,
    description: string
}

const arrScientists: Scientist[] =[
    {
        name: "Dr. Henry Jekyll",
        age: 34,
        minions: 1,
        description: "Scientist who searches for alteration of the human body and to separate the evil from the good"

    },
    {
        name: "Professor Moriarty ",
        age: 56,
        minions: 23,
        description: "Evil genius, loves murders and kittens"

    },
    {
        name: "Dr. Julius No",
        age: 49,
        minions: 4,
        description: "Brilliant scientist with a implied Napoleon complex."

    },
];


let scientistOption = document.getElementById("scientistListDiv") as HTMLDivElement;

function getScientistName():void{
    for(const scientist of arrScientists){
        const scientistList = document.createElement("div");
        scientistList.innerHTML = scientist.name;
        scientistList.style.border ="2px solid black"
        scientistOption.append(scientistList);

        scientistList.addEventListener('click', listenerFunction);

    } 
}


function listenerFunction(this:HTMLElement, ev: Event){
    ev.preventDefault();
    const scientistName:string = this.innerHTML;
    showInfo(scientistName); 
}

const scientistInfo = document.getElementById("infoCard") as HTMLSelectElement;

function showInfo(scientistName:string):void{
    let evilScientist : any;
    evilScientist = arrScientists.find(t=>t.name === scientistName);
    console.log(typeof evilScientist);

    //const scientistInfoCard = document.createElement("h3");
    //scientistInfoCard.innerHTML = evilScientist.name; 
    //scientistInfo.append(scientistInfoCard);

    let property: keyof typeof evilScientist;
    for (property in evilScientist){
        console.log(`${property}: ${evilScientist[property]}`);

        const scientistInfoCard = document.createElement("p");
        scientistInfoCard.innerHTML = (`${property}: ${evilScientist[property]}`); 
        scientistInfo.append(scientistInfoCard);
    }

    
}


// Program start
getScientistName();