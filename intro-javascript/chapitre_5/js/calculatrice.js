function calculer(nbr1,signe,nbr2){
    if (signe === "+"){
        return (nbr1 + nbr2);
    }else if (signe === "-"){
        return (nbr1 - nbr2);
    }else if (signe === "*"){
        return (nbr1 * nbr2);
    }else if (signe === "/"){
        return (nbr1 / nbr2);
    }
}

console.log(calculer(4, "+", 6 ));
console.log(calculer(4, "-", 6 ));
console.log(calculer(2, "*", 0 ));
console.log(calculer(12, "/", 0 ));