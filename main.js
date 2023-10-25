let control;

const name = prompt("Inserisci il tuo nome");
const surname = prompt("Inserisci il tuo cognome");
let color = prompt("Inserisci il tuo colore preferito");

let password = `La tua password è: ${name}${surname}${color}#${Math.floor(Math.random() * 100)}`;

console.log(password);