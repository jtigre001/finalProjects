function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
  return false
}
function start() {
  document.forms["luckySevens"]["startingBet"].focus();
  return false;
}
function reset() {
  document.forms["luckySevens"]["showStartBet"].value = "";
  document.forms["luckySevens"]["numRolls"].value = "";
  document.forms["luckySevens"]["max"].value = "";
  document.forms["luckySevens"]["rollCountAtMax"].value = "";
  document.forms["luckySevens"]["playBtn"].innerText = "Play";
  document.forms["luckySevens"]["startingBet"].focus();
  return false;
}
function dispEvents() {
  var state = document.forms["luckySevens"]["playBtn"].innerText;
  if (state === "Play Again?"){
    reset()
    return false;
  }
  var initAmount = parseInt(document.forms["luckySevens"]["startingBet"].value);

  if (initAmount <=0 || initAmount =="" || isNaN(initAmount)){
    alert("WARNING: Initial amount must be greater than $0.");
    document.forms["luckySevens"]["startingBet"].focus();
    return false;
  }
  var temp = [];
  var amount =  initAmount;
  while(amount > 0){
    temp[temp.length] = amount;
    if((rollDice(6) + rollDice(6)) ===7){
      temp[temp.length] = amount + 4.
      amount = amount + 4.;
    }else{
      temp[temp.length] = amount - 1.;
      amount = amount-1.;
    }
  }

  document.getElementById("showStartBet").innerText = temp[0];
  document.getElementById("numRolls").innerText = temp.length;
  document.getElementById("max").innerText = Math.max.apply(Math,temp);
  document.getElementById("rollCountAtMax").innerText = temp.indexOf(Math.max.apply(Math,temp));
  document.getElementById("playBtn").innerText = "Play Again?";
  document.getElementById("results").style.display="block";
  console.log(temp);
  return false;
}
