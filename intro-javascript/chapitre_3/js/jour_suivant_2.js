var jour = prompt("veuillez choisir un jour de la semaine");

switch (jour) {
    case "lundi":
        console.log("demain c'est mardi");
        break;
    case "mardi":
        console.log("demain c'est mercredi");
        break;
    case "mercredi":
        console.log("demain c'est jeudi");
        break;
    case "jeudi":
        console.log("demain c'est vendredi");
        break;
    case "vendredi":
        console.log("demain c'est samedi");
        break;
    case "samedi":
        console.log("demain c'est dimanche");
        break;
    case "dimanche":
        console.log("demain tu retournes bosser hahahaha");
        break;
    default:
        console.log("veuillez choisir un jour de la semaine");
}