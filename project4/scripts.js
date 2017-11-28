$(document).ready(function() {
  //task1
  $(document).on('click', '.trigger1', function(){
    var myInput = $("#ex1").val();
    var ans =  (5 * myInput - Math.pow((3 * myInput), 2) + 13);
    var outMe = '5 * myInput - Math.pow((3 * myInput), 2) + 13 = ' + ans;
    $('#task1').text(outMe);
  });

  //task2
  $(document).on('click', '.trigger2', function(){
    var input0 = $('#string0').val();
    var input1 = $('#string1').val();
    var input2 = $('#string2').val();
    $('#task2').text("Hello, " + input0 + " " + input1 + " " + input2 + "!");
  })

});
