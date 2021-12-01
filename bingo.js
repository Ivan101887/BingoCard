var initRange="1-30";
var isUsed = new Array(30)

function getRnage(){    
    let i= ""
    i=document.getElementById("p-range").value;
    let tmp=""
    if (i.length>0){        
        tmp = i.split("-")
        console.log(tmp)
        
    }else{        
        tmp = initRange.split("-")
        console.log(tmp)        
    }
    return tmp;
}
 function submit($event) {
      this.event.preventDefault();
    }
function isSelected(){ 
    document.getElementById("item0").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item1").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item2").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item3").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item4").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item5").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item6").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item7").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    document.getElementById("item8").onclick=()=>{
        this.classList.toggle("bg-danger");
    }
    

    
}
        
    


function changeMode() {
    let open=document.getElementById("mode");
    open = parseInt(open.value)
    if(open){
        var inputs =document.querySelectorAll(".bingo-box")
        console.log(inputs)}
        
        for(let input of inputs){
            input.readOnly = !input.readOnly;
            console.log(input.readOnly)
        }
    
}
    




function resetUsed() {
    for (let i=0;i<isUsed.length;i++){
        isUsed[i]=false;
    }
}

function generateNewOne(){
    resetUsed();
    newCard();
}

function getNewNum(min,Max) {
    return Math.floor((Math.random()*Max)+min);
}

const newCard = () => {
    let RR=getRnage();
    const min = parseInt(RR[0])
    const Max = parseInt(RR[1])
    let numberUsed =[];
    for (let i = 0; i < 9; i ++) {
        const randomNum = getNewNum(min,Max);
        if (numberUsed.find(n => n === randomNum)) {
            i--;
        } else {
            numberUsed.push(randomNum);
            document.getElementById("item" + i).value = randomNum;
        }
    }
}
