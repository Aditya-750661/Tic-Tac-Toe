let box = document.getElementsByClassName("box");
let reset  = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".msg");

let count = 1;

let winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//=======ResetGame========

reset.onclick = ()=>
    {
        count = 0;
        for (const element of box) {
            element.innerText = "";
            element.disabled= false;
        }
    }

//=======newGame========


let a = newGame.onclick = ()=>
    {
        count = 0;
        for (const element of box) {
            element.innerText = "";
            element.disabled= false;
        }
        msg.innerText="";
    }



console.log(box);
let x = true;

for (const element of box) {


    element.onclick = ()=>{
        if(x == true){
            element.innerText = "X";
            element.disabled=true;
            x=false;
            count++;
            if(count >= 9){
                msg.innerText= "Match has Draw"
            }
            checkWinner();
            
        }
        else{
            element.innerText= "O";
            element.disabled=true;
            x=true;
            count++;

            if(count >= 9){
                msg.innerText= "Match has Draw"
            }
            checkWinner();
            
        }
    }
}


checkWinner = ()=>{
    for (const element of winPatterns) {
      
        let pos1 = box[element[0]].innerText;
        let pos2 = box[element[1]].innerText;
        let pos3 = box[element[2]].innerText;

        if(pos1 === pos2 & pos1 === pos2 && pos1 === pos3 && pos1 != "")   {
            msg.innerText = `Winner is ${pos1}`;
            
                    for (const element of box) {
                        element.innerText = "";
                        element.disabled= false;
                    }

     }
        
    }

}