$(document).ready(function() {
  //task1
  $(document).on('click', '.trigger1', function() {
    var myInput = $("#ex1").val();
    var ans = (5 * myInput - Math.pow((3 * myInput), 2) + 13);
    var outMe = '5 * myInput - Math.pow((3 * myInput), 2) + 13 = ' + ans;
    $('#task1').text(outMe);
  });

  //task2
  $(document).on('click', '.trigger2', function() {
    var input0 = $('#string0').val();
    var input1 = $('#string1').val();
    var input2 = $('#string2').val();
    $('#task2').text("Hello, " + input0 + " " + input1 + " " + input2 + "!");
  });

  //task3
  $(document).on('click', '.XandY', function() {
    const task3NumX = $('#x').val();
    const task3NumY = $('#y').val();
    if (task3NumX > task3NumY) {
      $('#task3').html("bananas".fontcolor("yellow"));
    } else if (task3NumY > task3NumX) {
      $('#task3').html("porcupine".fontcolor("brown"));
    } else if (task3NumX == task3NumY && task3NumX < 0) {
      $('#task3').html("red apples".fontcolor("red"));
    } else {
      $('#task3').html("green apples".fontcolor("green"));
    }
  });

  //task4
  $(document).on('click', '.pNumbers', function() {
    const pNumInput = $("#phoneNumber").val();
    const Ans = pNumInput.replace(/[^0-9]/g, '');
    if (Ans.length < 10 | Ans.length > 11 | Ans.charAt(0) != "1") {
      $('#task4').html("invalid".fontcolor("red"));
    } else {
      $('#task4').html("valid".fontcolor("green"));
    }
  });

  //task5
  $(document).on('click', '.thirdItem', function(){
    let makeList = $('#myList').val();
    makeList = makeList.split(',');
    $('#task5').text(makeList[2]);
  });

  //Task6


});
