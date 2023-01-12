const scientistListBox = document.getElementById("scientistListDiv") as HTMLDivElement;
const scientistInfoBox = document.getElementById("infoCard") as HTMLDivElement;
const submitBtn = document.getElementById("submit") as HTMLButtonElement;

type Scientist = {
    name: string,
    age: number,
    minions: number,
    description: string
}

let scientistDB:{
    arrScientists: Scientist[],
    showScientistName: ()=>void,
    showInfo: (scientistName:string)=>void,
    addScientist: ()=>void, 
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
    showScientistName: function():void{
        for(const scientist of this.arrScientists){
            const scientistDiv = document.createElement("div");
            scientistDiv.innerHTML = scientist.name;
            scientistDiv.className = "scientistdiv";
            scientistListBox.append(scientistDiv);
    
            scientistDiv.addEventListener('click', function(event){
                event.preventDefault();
                const scientistName:string = this.innerHTML;
                scientistInfoBox.innerHTML = " ";
                scientistDB.showInfo(scientistName); 
            });
        }
    },
    showInfo: function(scientistName:string):void{
        let evilScientist:Scientist;
        evilScientist = this.arrScientists.find(t=>t.name === scientistName) as Scientist;
    
        let property: keyof typeof evilScientist;
        for (property in evilScientist){
            //console.log(`${property}: ${evilScientist[property]}`);
            const scientistInfoCard = document.createElement("p");
            const prettyText = property.charAt(0).toUpperCase() + property.slice(1);
            scientistInfoCard.innerHTML = (`${prettyText}: ${evilScientist[property]}`); 
            scientistInfoBox.append(scientistInfoCard);
        } 
    },
    addScientist: function ():void{
        const newSName = document.querySelector("#scientistName") as HTMLInputElement;
        const newSAge = document.querySelector("#scientistAge") as HTMLInputElement;
        const newSMinion = (document.querySelector("#scientistNrMinion") as HTMLInputElement);
        const newSDescription = (document.querySelector("#scientistDescription") as HTMLTextAreaElement);
        
        const m: Scientist ={
            name:newSName.value,
            age:newSAge.valueAsNumber,
            minions:newSMinion.valueAsNumber,
            description:newSDescription.value
        }
        if(newSName.value && newSDescription.value !== ""){
            if(!Number.isNaN(newSAge.valueAsNumber) && !Number.isNaN(newSMinion.valueAsNumber)){
                scientistDB.arrScientists.push(m);
                scientistListBox.innerHTML= " ";
                scientistDB.showScientistName();
            }
        }else{
            alert("Sorry, you have to fill in every input. Thanks!")
        }
    }
}

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    scientistDB.addScientist();
    const resetForm = document.querySelector('form') as HTMLFormElement; 
    resetForm.reset();
})

// Program start
scientistDB.showScientistName();