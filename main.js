let testoDaModificare = document.querySelector("h1");
let btn = document.querySelector("button");
let numeri = [];
let userNumbers = [];


btn.addEventListener("click", cancellaTesto); //problema col click, lo script pensa che clicco ad ogni avvio della pagina... RISOLTO bastava togliere le parentesi da "cancellaTesto()"

setTimeout(cancellaTesto, 5 * 1000); //funziona ma ho sempre quel problema col click






















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
    }
}