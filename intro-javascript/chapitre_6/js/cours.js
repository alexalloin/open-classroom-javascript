console.log("ABC".length);
console.log("Je suis une chaine".length);

var mot = "Kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLocaleLowerCase();
console.log(motEnMinuscules);
var motEnMajucules = motInitial.toUpperCase();
console.log(motEnMajucules);

var chaine = "qwerty";
console.log(chaine === "qwerty"); // affiche true
console.log(chaine === "azerty"); // affiche false
console.log("Qwerty" === "qwerty") 
// affiche false a cause de la majusculte

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter") // affiche false a cause du Q majuscule
console.log(valeurSaisie.toLocaleLowerCase() === "quiter") // affiche true

var sport = "Tenis-ballon" // 13 caracteres
console.log(sport.charAt(0)); // affiche T
console.log(sport[0]); // affiche T
console.log(sport.charAt(5)); // affiche "-"
console.log(sport[5]); // affiche "-"

var prenom = "Odile"; // 5 caracteres
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);

// for (var i = 0; i < maChaine.length; i++){}
// maChaine[i] renvoie le ieme caractere de ma chaime//

var prenom = "Odile";
for (var i =0; i < prenom.length; i++){
    console.log(prenom[i]);
}

