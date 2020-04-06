$(document).ready(function(){
  $('#rollDice').on('click', function(){
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    var diceArray = [d1, d2, d3, d4, d5, d6];
    var count = 0;
    function checkRoll(eyes) {
      count = 0;
      for (var i = 0; i < diceArray.length; ++i){
          if(diceArray[i] == eyes)
              count++;
      }
      if(diceArray.includes(eyes)){
          alert("you rolled"+count+eyes+"'s");
      }
    }
    checkRoll("1");
    checkRoll("2");
    checkRoll("3");
    checkRoll("4");
    checkRoll("5");
    checkRoll("6");
    $('#die1').html(d1);
    $('#die2').html(d2);
    $('#die3').html(d3);
    $('#die4').html(d4);
    $('#die5').html(d5);
    $('#die6').html(d6);
  });
});
