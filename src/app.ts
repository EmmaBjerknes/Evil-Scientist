const scientistOption = document.getElementById("scientistListDiv") as HTMLDivElement;
const scientistInfo = document.getElementById("infoCard") as HTMLDivElement;
const submitBtn = document.getElementById("submit") as HTMLButtonElement;

type Scientist = {
    name: string,
    age: number,
    minions: number,
    description: string
}

let scientistDB:{
    arrScientists: Scientist[],
    getScientistName: ()=>void,
    showInfo: (scientistName:string)=>void,
    getInputFromForm: ()=>void,
    addScientist: (
        name: string,
        age: number,
        minions: number,
        description: string
    )=>void, 
} ={
    arrScientists: [
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
    ],
    getScientistName: function():void{
        for(const scientist of this.arrScientists){
            const scientistList = document.createElement("div");
            scientistList.innerHTML = scientist.name;
            scientistList.style.border ="2px solid black"
            scientistOption.append(scientistList);
    
            scientistList.addEventListener('click', function(event){
                event.preventDefault();
                const scientistName:string = this.innerHTML;
                scientistInfo.innerHTML = " ";
                scientistDB.showInfo(scientistName); 
            });
        } 
    },
    showInfo: function(scientistName:string):void{
        let evilScientist:Scientist;
        evilScientist = this.arrScientists.find(t=>t.name === scientistName) as Scientist;
        //console.log(typeof evilScientist);
    
        let property: keyof typeof evilScientist;
        for (property in evilScientist){
            //console.log(`${property}: ${evilScientist[property]}`);
            const scientistInfoCard = document.createElement("p");
            scientistInfoCard.innerHTML = (`${property}: ${evilScientist[property]}`); 
            scientistInfo.append(scientistInfoCard);
        } 
    },
    getInputFromForm: function():void{
        // TO DO - Make it prettier, loop, change names etc. 
        const inputNewScientistName: string = (document.querySelector("#scientistName") as HTMLInputElement).value;
        const inputNewScientistAge: number = (document.querySelector("#scientistAge") as HTMLInputElement).valueAsNumber;
        const inputNewScientistNrMinion: number = (document.querySelector("#scientistNrMinion") as HTMLInputElement).valueAsNumber;
        const inputNewScientistDescription: string = (document.querySelector("#scientistDescription") as HTMLInputElement).value;
    
       //let x = Number(inputNewScientistAge.valueOf);
        this.addScientist(inputNewScientistName,inputNewScientistAge, inputNewScientistNrMinion, inputNewScientistDescription);   
    },
    addScientist: function (
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
        scientistDB.arrScientists.push(m);
        console.log(scientistDB.arrScientists);
        scientistOption.innerHTML= " ";
        scientistDB.getScientistName();
    }
}

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    scientistDB.getInputFromForm();
    const resetForm = document.querySelector('form') as HTMLFormElement; 
    resetForm.reset();
})

// Program start
scientistDB.getScientistName();