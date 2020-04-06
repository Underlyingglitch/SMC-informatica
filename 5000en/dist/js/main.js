$(document).ready(function(){

  function checkRoll(diceArray) {
    var totalAmount = [];
    for (var x = 1; x < 7; x++) {
      var count = 0;
      for (var i = 0; i < diceArray.length; ++i){
          if(diceArray[i] == x)
              count++;
      }
      if ($.inArray(x, diceArray) != -1) {
        totalAmount[x] = count;
      }
    }
    console.log(totalAmount);
  }

  $('#rollDice').on('click', function(){
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    var diceArray = [d1, d2, d3, d4, d5, d6];

    checkRoll(diceArray);

    $('#die1').html(d1);
    $('#die2').html(d2);
    $('#die3').html(d3);
    $('#die4').html(d4);
    $('#die5').html(d5);
    $('#die6').html(d6);
  });
});
