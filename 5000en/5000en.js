function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    var diceArray = [d1, d2, d3, d4, d5, d6];
    var count2 = 0;
    for (var i = 0; i < diceArray.length; ++i){
        if(diceArray[i] == 2)
            count++;
    }
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(diceArray.includes(2)){
        status.innerHTML = "you rolled" + count2 + "2's";
    }
}
