var meteo = prompt("Quel temps fait-il?");

if (meteo === "soleil") {
    console.log("allez jouer dehors");

} else if (meteo === "nuageux") {
    console.log("Mettez un pull");

} else if (meteo === "pluvieux") {
    console.log("mettez un manteau");

} else if (meteo === "neige") {
    console.log("Faites un bonhomme de neige");

} else {
    console.log("Veuillez choisir une de ces expressions : soleil, nuageux, pluvieux, neige. Merci!");
}