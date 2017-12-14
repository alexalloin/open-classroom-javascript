var nbChoisit = Number(prompt("Veuillez introduire un nombre: "));
var i;

for(i = nbChoisit; i < nbChoisit + 10; i++){
    if (i % 2 === 0){
        console.log (i + " est pair");
    }else{
        console.log(i + " est impair");
    }
}