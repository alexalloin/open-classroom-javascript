// Le périmètre P d'un cercle de rayon r s'écrit : =====  P = 2 × π × r. 

// L'aire d'un cercle est égale à son rayon au carré multiplié par π ====  A = (r * r) * π

// La valeur du nombre π (Pi) peut s'obtenir en JavaScript en écrivantMath.PI.

function perimetre() {
    var resutatPerimetre = ((2 * Math.PI) * r);
    return resutatPerimetre;
}

function aire() {
    var resultatAire = ((r * r) * Math.PI);
    return resultatAire;
}

var r = (prompt("Entrez la valeur du rayon du cercle: "));
console.log("Son perimetre vaut : " + perimetre(r));
console.log("Son aire vaut: " + aire(r));