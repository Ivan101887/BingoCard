function getRnage(){    
    let i = document.getElementById("p-range").value;
    const min = i.split("-")[0]
    const max = i.split("-")[1];

    if (min && max && max - min >= 8 && min >0){        
      tmp = [min , max]
      console.log('a')
    } else {        
       tmp = [1,30]
       alert('請輸入合理範圍')
    }
    return tmp;
}

function changeMode() {
    let open=document.getElementById("mode");
    if(open==0){
        document.querySelector('#bingoCard').onclick=e=> e.target.classList.toggle("bg-danger");
        // console.log("aa")
    } else {
         document.querySelector('#bingoCard').onclick=undefined;
         document.querySelectorAll('.bingo-box').forEach(e => e.classList.remove("bg-danger"))
        //  console.log("bb")
    }
    open = parseInt(open.value)
    if(open){
        var inputs =document.querySelectorAll(".bingo-box")
        // console.log(inputs)
        for(let input of inputs){
            input.readOnly = !input.readOnly;
            // console.log(input.readOnly)
        }
    }
}

var checkNum = function(){
    let inUsed = document.querySelectorAll(".bingo-box");
    let inUsedNums = []
    inUsed.forEach(item => inUsedNums.push(item.value))
    // console.log(inUsedNums);
    document.querySelectorAll('#bingoCard').onchange = item => {
        // if (item.target.value==)
}    }


function getNewNum(min,Max) {
    return Math.floor((Math.random()*(Max-min+1))+min);
}

const newCard = () => {
    let NR=getRnage();
    const min = parseInt(NR[0])
    const Max = parseInt(NR[1])
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
    let open=document.getElementById("mode").value;
    // open = parseInt(open)
    
        document.querySelector('#bingoCard').onclick=e=> e.target.classList.toggle("bg-danger");
        console.log("aa")
    
    // console.log(document.querySelectorAll(".bingo-box"))
    
    }
    
