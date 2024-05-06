//Generazione dei numeri senza duplicati
function generaNumeriSenzaDuplicati() {
    testoDaModificare.innerHTML = "";
    while (numeri.length < 5) {
        let nuovoNumero = Math.floor(Math.random() * 101); // Genera un numero casuale da 1 a 100
        if (!numeri.includes(nuovoNumero)) { // Verifica se il numero non è già presente nell'array
            numeri.push(nuovoNumero); // Aggiunge il numero all'array se non è duplicato
            testoDaModificare.innerHTML = numeri; //da chiedere come posso fare in modo da gestire lo spazio ad ognuno perché adesso li stampa e basta
        }
    }
    return numeri;
}

//Wipe del testo
function cancellaTesto() {
    testoDaModificare.classList.add("stealth"); //Mi mette opacity a 0
}

//Utente inserisci i numeri
function inserisciNumeri() {
    while (userNumbers.length <= numeri.length - 1) {
        userSingleNumber = prompt("scrivi i tuoi numeri");
        userNumbers.push(userSingleNumber);

        // parseInt(userNumbers.every); try ma non funziona
    }
    // parseInt(userNumbers); try ma non funziona
    console.log("I tuoi numeri sono " + `${userNumbers}`);
}

/*
//Problema non funziona, penso che sia perché sono stringhe(?)
function compare() {
    // numeri.includes(parseInt(userNumbers[0]));
    if (userNumbers.includes(numeri[1])){
        console.log("c'è")
    }
    else {
        console.log("non c'è")
    }
}
*/

function compare() {
    // numeri.includes(parseInt(userNumbers[0]));
    for (let i = 0; i < userNumbers.length; i++) {
        if (numeri.includes(parseInt(userNumbers[i]))) {
            console.log("c'è")
            punteggio++;
        }
        else {
            console.log("non c'è")
        }
    }

}