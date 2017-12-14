var note = Number(prompt("Entrez la note de l'eleve"));

if (note < 10 && note >= 0) {
    console.log("L'eleve est en echec scolaire");

} else if (note >= 10 && note <= 12) {
    console.log("L'eleve est recu avec une note moyenne");

} else if (note > 12 && note <= 16) {
    console.log("L'eleve a reussi avec distinction");

} else if (note > 16 && note < 20) {
    console.log("L'eleve est recu avec grande distinction");

} else if (note === 20) {
    console.log("L'eleve est recu avec la plus grande distinction");

} else {
    console.log("Veuillez entrez une valeure numerique comprise entre 0 et 20");
}