const email = prompt("Inserisci la tua email: ");
let emailFound = false;

const emailList = ["michele@gmail.com", "marco@gmail.com", "pippo@gmail.com"]

for (let i = 0; i < emailList.length; i++) {

    if (email === emailList[i]) {

        emailFound = true;

        console.log("Email trovata benvenuto!");

    }

}

if (emailFound === true) {

    alert("Email trovata benvenuto puoi proseguire zio!");

} else {

    alert("Email non trovata");

}