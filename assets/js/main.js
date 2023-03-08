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