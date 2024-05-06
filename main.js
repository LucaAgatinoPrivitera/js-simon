let testoDaModificare = document.querySelector("h1");
let btn = document.querySelector("button");
let numeri = [];
let userNumbers = [];

/*
btn.addEventListener("click", generaNumeriSenzaDuplicati, setTimeout(cancellaTesto, 5 * 1000)); //problema col click, lo script pensa che clicco ad ogni avvio della pagina... RISOLTO bastava togliere le parentesi da "cancellaTesto()"
*/

btn.addEventListener("click", function () {
    generaNumeriSenzaDuplicati();
    setTimeout(cancellaTesto, 5 * 1000);
    console.log("I numeri casuali sono " + `${numeri}`);
    setTimeout(inserisciNumeri, 6 * 1000);
});





















