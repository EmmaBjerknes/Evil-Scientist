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


const scientistOption = document.getElementById("scientistListDiv") as HTMLDivElement;
const scientistInfo = document.getElementById("infoCard") as HTMLDivElement;
const submitBtn: HTMLInputElement = document.getElementById("submit") as HTMLInputElement;

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
    scientistInfo.innerHTML = " ";
    showInfo(scientistName); 
}


function showInfo(scientistName:string):void{
    let evilScientist : any;
    evilScientist = arrScientists.find(t=>t.name === scientistName);
    //console.log(typeof evilScientist);

    let property: keyof typeof evilScientist;
    for (property in evilScientist){
        //console.log(`${property}: ${evilScientist[property]}`);
        const scientistInfoCard = document.createElement("p");
        scientistInfoCard.innerHTML = (`${property}: ${evilScientist[property]}`); 
        scientistInfo.append(scientistInfoCard);
    } 

}

submitBtn.addEventListener('click', submitForm);
function submitForm(x:any):void{
    x.preventDefault();
    console.log("clicked submit!");
}



// Program start
getScientistName();