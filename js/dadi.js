let numberUser = Math.floor(Math.random() * 6) + 1;
let numberCPU = Math.floor(Math.random() * 6) + 1;

console.log("Numero utente: " + numberUser);

console.log("Numero CPU: " + numberCPU);


if (numberCPU > numberUser) {

    alert("Il Banco Vince... Riprova sarai più fortunato")  
} else if (numberCPU < numberUser) {

    alert("Hai vinto congratulazioni !!!");

} else if (numberCPU === numberUser){

    alert("Tu ed il banco avete gli stessi numeri...");
}