function welcomeCustomer() {
  alert("Welcome to Ducky World!");
}

function greetCustomer() {
  let userName = prompt("What is your name?");
  if (userName) {
    alert("Hello, " + userName + "!");
  } else {
    alert("Hello, valued customer!");
  }
}

function totalDucks() {
  let yellow = parseInt(document.getElementById("yellow").value) || 0;
  let pink = parseInt(document.getElementById("pink").value) || 0;
  let blue = parseInt(document.getElementById("blue").value) || 0;
  let astro = parseInt(document.getElementById("astro").value) || 0;

  let sum = yellow + pink + blue + astro;
  alert("Total ducks ordered: " + sum);
}

function validateOrder() {
  let yellow = parseInt(document.getElementById("yellow").value) || 0;
  let pink = parseInt(document.getElementById("pink").value) || 0;
  let blue = parseInt(document.getElementById("blue").value) || 0;
  let astro = parseInt(document.getElementById("astro").value) || 0;

  let total = yellow + pink + blue + astro;

  if (total === 0) {
    alert("Please select at least one duck.");
    return false;
  }

  let confirmMsg = confirm("Are you sure you want to place this order?");
  return confirmMsg;
}
