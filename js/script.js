console.log("JS OK")

// ******* Variabili di base ************

// ! recupero elemento

const totalElement = document.getElementById("final-price");

// ! variabile costo per km

const priceKm = 0.21;

// ! messaggio prezzo finale

const priceMessage = "Il costo del tuo biglietto è: €";

// ! eventuale sconto

let discount = null;

// ********* creiamo la logica dell'esercizio ***********

// ! chiedo età e km da percorrere all'utente

const age = parseInt(prompt(" quanti anni hai?", 30))
const km = parseInt(prompt("Quanti km devi percorrere?", 300))

// ! validazione *******

if(isNaN(age) || isNaN(km) || age <= 0 || km <= 0)  {
    alert("i dati inseriti non sono corretti");
} else {

    // ! Calcolo del prezzo biglietto

    const standardPrice = km * priceKm;
    let finalPrice = standardPrice

    // ! validazione per lo sconto

    if (age < 18) {
        discount = 20;
    } else if (age > 65) {
        discount = 40;
    }
    // ! logica dell'eventuale sconto
    if (discount) {
        const discountElement = document.getElementById("sconto")
        const discountMessage = `Hai diritto a uno sconto del ${discount}%`

    // ! scrivo il messaggio dello sconto in pagina

        discountElement.innerText = discountMessage

    // ! calcolo lo sconto
        finalPrice -= (finalPrice / 100) * discount;

    }

    // ! stampo in pagina il prezzo del biglietto

    totalElement.innerText = priceMessage + finalPrice.toFixed(2)

    if(discount) totalElement.innerHTML += `<small><del> €${standardPrice.toFixed(2)}</small></del>`;
}

