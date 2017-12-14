/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Welcome in guessing game !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var secretNumber = Number(prompt("Enter a nomber")) | 0;
var round = 1

while ((secretNumber !== solution) && (round++ < 7)) {

    if (secretNumber < solution) {
        console.log("The secret number is higher than " + secretNumber);
        secretNumber = Number(prompt("Enter a new number")) | 0;

    } else if (secretNumber > solution) {
        console.log("The secret number is lower than " + secretNumber);
        secretNumber = Number(prompt("Enter a new number")) | 0;
    }
}

if (secretNumber === solution) {
    console.log("You win, the secert number was : " + solution);

} else {
    console.log("You lost, the secret number was: " + solution);
}
