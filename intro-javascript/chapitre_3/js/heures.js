var heure = Number(prompt("Veuillez indiquer l'heure qu'il est"));
var minutes = Number(prompt("veuillez indiquer les minutes"));
var secondes = Number(prompt("veuiller indiquer les secondes"));

if (heure < 0 || heure > 23) {
    console.log("Veuillez choisir une heure comprise entre 0 et 23");

} else if (minutes < 0 || minutes > 59) {
    console.log("Veuillez choisir des minutes comprisent entre 0 et 59");

} else if (secondes < 0 || secondes > 59) {
    console.log("Veuillez choisir des secondes comprisent entre 0 et 59");

} else if (secondes >= 0 && secondes <= 58) {
    (secondes++);
    console.log("Dans une seconde il sera " + heure + "h " + minutes + "m " + secondes + "s");

} else if (heure === 23 && minutes === 59 && secondes === 59) {
    console.log("Dans une seconde il sera minuit 00H 00min 00sec");

} else if (minutes === 59 && secondes === 59) {
    (heure++);
    console.log("dans une seconde il sera " + heure + "h " + "0m " + "0s");

} else if (secondes === 59) {
    (minutes++);
    console.log("Dans une seconde il sera " + heure + "h " + minutes + "m " + "0s");
}