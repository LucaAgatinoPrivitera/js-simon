testoDaModificare = document.querySelector("h1")















function generaNumeriSenzaDuplicati() {
    let numeri = [];
    while (numeri.length < 5) {
        let nuovoNumero = Math.floor(Math.random() * 101); // Genera un numero casuale da 1 a 100
        if (!numeri.includes(nuovoNumero)){ // Verifica se il numero non è già presente nell'array
            numeri.push(nuovoNumero); // Aggiunge il numero all'array se non è duplicato
        }
    }
    return numeri;
}