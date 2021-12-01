var initRange="1-30";
var isUsed = new Array(30)

function getRnage(){    
    let i= "";
    i = document.getElementById("p-range").value;
    let tmp = "";
    if (i.length > 0){        
        tmp = i.split("-")      
    } else {        
        tmp = initRange.split("-")        
    }
    return tmp;
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
    


function getNewNum(min,Max) {
    return Math.floor((Math.random()*(Max-min)+1)+min);
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
    document.querySelector('#bingoCard').onclick=e=> e.target.classList.toggle("bg-danger");
    
}