let numberUser = Math.floor(Math.random() * 6) + 1;
let numberCPU = Math.floor(Math.random() * 6) + 1;

const userEl = document.querySelector("#number_user");
const cpuEl = document.querySelector("#number_cpu");
const game = document.querySelector(".ciao");
const resultEl = document.querySelector("h1");


console.log("Numero utente: " + numberUser);

console.log("Numero CPU: " + numberCPU);


game.addEventListener("click", function () {

    userEl.innerHTML = numberUser

    cpuEl.innerHTML = numberCPU

    if (numberCPU > numberUser) {

        // alert("Il Banco Vince... Riprova sarai più fortunato") 

        resultEl.innerHTML = ("Il banco vince")

    } else if (numberCPU < numberUser) {

        resultEl.innerHTML = ("Hai vinto !!")

        // alert("Hai vinto congratulazioni !!!");

    } else if (numberCPU === numberUser) {

        resultEl.innerHTML = ("Pareggio")

        // alert("Tu ed il banco avete gli stessi numeri...");
    }

})


