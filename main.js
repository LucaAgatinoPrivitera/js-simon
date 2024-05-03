let testoDaModificare = document.querySelector("h1");
let btn = document.querySelector("button");












function generaNumeriSenzaDuplicati() {
    let numeri = [];
    testoDaModificare.innerHTML ="";
    while (numeri.length < 5) {
        let nuovoNumero = Math.floor(Math.random() * 101); // Genera un numero casuale da 1 a 100
        if (!numeri.includes(nuovoNumero)){ // Verifica se il numero non è già presente nell'array
            numeri.push(nuovoNumero); // Aggiunge il numero all'array se non è duplicato
            testoDaModificare.innerHTML = numeri; //da chiedere come posso fare in modo da gestire lo spazio ad ognuno perché adesso li stampa e basta
        }
    }
    
    return numeri;
}



btn.addEventListener("click", generaNumeriSenzaDuplicati ());