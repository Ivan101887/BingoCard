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
 function submit(event) {
      event.preventDefault();
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
