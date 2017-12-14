var meteo = prompt("Dites moi quel temps fait-il?");

switch (meteo) {
    case "soleil":
        console.log("Tu peux jouer dehors!");
        break;

    case "vent":
        console.log("Mets un pull");
        break;

    case "pluie":
        console.log("Mets un manteau avec une capuche!");
        break;

    case "neige":
        console.log("Soyer heureux il neige!");
        break;

    default:
        console.log("merci de choisir une de ces situations : soleil, vent, pluie ou neige!");

}