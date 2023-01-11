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


const scientistOption: HTMLDivElement = document.getElementById("scientistListDiv") as HTMLDivElement;
const scientistInfo: HTMLDivElement = document.getElementById("infoCard") as HTMLDivElement;
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
    let evilScientist:Scientist;
    evilScientist = arrScientists.find(t=>t.name === scientistName) as Scientist;
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

function submitForm(this:HTMLElement, ev: Event):void{
    ev.preventDefault();
    // console.log("clicked submit!");
    getInputFromForm();
    
    let resetForm: HTMLFormElement = document.querySelector('form') as HTMLFormElement; 
    resetForm.reset();
}

function getInputFromForm():void{
    const inputNewScientistName: string = (document.querySelector("#scientistName") as HTMLInputElement).value;
    const inputNewScientistAge: number = (document.querySelector("#scientistAge") as HTMLInputElement).valueAsNumber;
    const inputNewScientistNrMinion: number = (document.querySelector("#scientistNrMinion") as HTMLInputElement).valueAsNumber;
    const inputNewScientistDescription: string = (document.querySelector("#scientistDescription") as HTMLInputElement).value;

    addScientist(inputNewScientistName,inputNewScientistAge, inputNewScientistNrMinion, inputNewScientistDescription);   
}

function addScientist(
    name: string,
    age: number,
    minions: number,
    description: string
    ):void{
    const m: Scientist ={
        name:name,
        age:age,
        minions:minions,
        description:description
    }
    arrScientists.push(m);
    console.log(arrScientists);
    scientistOption.innerHTML= " ";
    getScientistName();
}      

// get form reset();
// Program start
getScientistName();