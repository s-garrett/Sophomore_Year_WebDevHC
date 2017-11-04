function equationSolver() {
  const input = document.getElementById("ex1").value;
  const x = Number(input);
  const answer = `5*x - 3x^2 +13 = ${(5*x) - (3* (Math.pow(x,2))) + 13}`;
  document.getElementById("task1").innerHTML = answer;
}
