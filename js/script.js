console.log("JS OK")

// ! elementi del form
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const kmsField = document.getElementById("kms");

// ! bottoni

const confirmButton = document.getElementById("confirm-button");
const resetButton = document.getElementById("reset-button");
const buyButton = document.getElementById("buy-button");

// ! elementi dei ticket

const ticketSection = document.getElementById("ticket");
const costumerElement = document.getElementById("costumer-name");
const rateElement = document.getElementById("rate");
const carElement = document.getElementById("car");
const cpElement = document.getElementById("cp");
const priceElement = document.getElementById("total");

// ! variabili standard

const priceKm = 0.21;
let rateName = "Tariffa Standard"

// ! event listener

confirmButton.addEventListener("click", function(){
    // ! recupero i valori dal form
   const nameValue = nameField.value.trim();
   const kmsValue = parseInt(kmsField.value);
   const ageValue = ageField.value;
   console.log(nameValue, kmsValue, ageValue)
})
