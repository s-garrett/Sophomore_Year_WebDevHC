function equationSolver() {
  const input = document.getElementById("ex1").value;
  const x = Number(input);
  const answer0 = `5*x - 3x^2 +13 = ${(5*x) - (3* (Math.pow(x,2))) + 13}`;
  document.getElementById("task1").innerHTML = answer0;
}

function combineStrings(){
  const input0 = document.getElementById('string0').value;
  const input1 = document.getElementById('string1').value;
  const input2 = document.getElementById('string2').value;
  const toCombine = ["Hello,", input0, input1, input2 + "!"];
  const answer1 = toCombine.join(" ");
  document.getElementById('task2').innerHTML =  answer1;
}

function XandY(){
  const task3NumX = document.getElementById('x').value;
  const task3NumY = document.getElementById('y').value;
  if (task3NumX > task3NumY) {
    document.getElementById('task3').innerHTML = "bananas".fontcolor("yellow");
  }
  else if (task3NumY > task3NumX) {
    document.getElementById('task3').innerHTML = "porcupine".fontcolor("brown");
  }
  else if (task3NumX == task3NumY && task3NumX < 0) {
    document.getElementById('task3').innerHTML = "red apples".fontcolor("red");
  }
  else {
    document.getElementById('task3').innerHTML = "green apples".fontcolor("green");
  }
}

function pNumbers(){
  const pNumInput = document.getElementById('phoneNumber').value;
  let Ans = pNumInput.replace(/-| /g, "");
  if (Ans.length < 10 | Ans.length > 11 | Ans.charAt(0) != "1") {
    document.getElementById('task4').innerHTML = "invalid".fontcolor("red");
  }
  else {
      document.getElementById('task4').innerHTML = "valid".fontcolor("green");
  }
}

function threeItem(){
  let makeList = document.getElementById('myList').value;
  makeList = makeList.split(',');
  document.getElementById('task5').innerHTML = makeList[2];
}
