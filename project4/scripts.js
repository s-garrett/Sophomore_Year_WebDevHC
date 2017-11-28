$(document).ready(function() {
  //task1
  $(document).on('click', '.trigger1', function(){
    var myInput = $("#ex1").val();
    var ans =  (5 * myInput - Math.pow((3 * myInput), 2) + 13);
    var outMe = '5 * myInput - Math.pow((3 * myInput), 2) + 13 = ' + ans;
    $('#task1').text(outMe);
  });

  //task2

});
