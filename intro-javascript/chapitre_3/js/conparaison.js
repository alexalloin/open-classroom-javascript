var nombre1 = Number(prompt("Veuillez choisir le premier nombre"));
var nombre2 = Number(prompt("veuillez choisir le second nmbre"));

if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);

} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);

} else if (nombre1 === nombre2) {
    console.log("les deux chiffres sont egaux");

} else {
    console.log("Veuillez ne choisir que des chiffres");
}