/* ##################################################################################################################
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
################################################################################################################## */

// PRENDO I DATI DELL'UTENTE

// Primo step: distanza che dovrà percorrere
let userDistance = Number(prompt("Qaunti km devi percorrere?"))
console.log(userDistance)
if (userDistance <= 1 || userDistance > 999) {
    userDistance =  Number(prompt("Si prega di inserie una distanza veritiera, compresa tra 1 e 999"))
    console.log(userDistance)
}

// Secondo step: età dell'utente
let userAge = Number(prompt("Qaunti anni hai?"))
console.log(userAge)
if (userAge <= 0 || userAge > 110) {
    userAge =  Number(prompt("Si prega di inserie un età veritiera, compresa tra 0 e 110"))
    console.log(userAge)
}

// CALCOLO IL COSTO DEL BIGLIETTO PER L'UTENTE

if (userAge < 18 ) {
    //prezzo minorenne
    const ticketPrice =  (userDistance * 0.21) - (userDistance * 0.21 / 100 * 20)
    document.getElementById("prezzo").innerHTML = `Il prezzo del suo biglietto è: ${ticketPrice.toFixed(2)}€ `
} else if  (userAge >= 65) {
    // prezzo over 65
    const ticketPrice =  (userDistance * 0.21) - (userDistance * 0.21 / 100 * 40)
    document.getElementById("prezzo").innerHTML = `Il prezzo del suo biglietto è: ${ticketPrice.toFixed(2)}€ `
} else {
    //prezzo normale
    const ticketPrice =  userDistance * 0.21
    document.getElementById("prezzo").innerHTML = `Il prezzo del suo biglietto è: ${ticketPrice.toFixed(2)}€ `
}