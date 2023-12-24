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
   console.log(nameValue, kmsValue, ageValue);

    // Todo Validazione
    if(!nameValue || isNaN(kms) || kms < 1){
        alert("Inserire un nome valido");
        return;
    }

    let price = priceKm * kmsValue;

    // ! sconto

    if(ageValue === "under"){
        rateName = "tariffa Minorenni";
        price *= 0.8;
    } else if(ageValue === "over"){
        rateName = "Tariffa Senior";
        price *= 0.6;
    }
    // numero biglietto e carrozza
  const car = Math.floor(Math.random() * 10) + 1; 
  const cp = Math.floor(Math.random() * (10000 - 9000)) + 9000;

//   ! creazione ticket

  costumerElement.innerText = nameValue;
  rateElement.innerText = rateName;
  carElement.innerText = car;
  cpElement.innerText = cp;
  priceElement.innerText = "€" + price.toFixed(2);

//   ! mostriamo il biglietto pronto

  ticketSection.classList.remove("d-none")
})
