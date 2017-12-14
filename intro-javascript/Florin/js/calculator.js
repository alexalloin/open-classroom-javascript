var numar1 =Number(prompt("Introduceti primul numar: "));
var numar2 =Number(prompt("introducet al doilea numar"));
var operator = prompt("introduceti un operator: +  -  *  /");

function calculeaza (numar1,numar2,operator){
    if (operator === "+") {
        return (numar1 + numar2);
    }
    else if (operator === "-"){
        return (numar1 - numar2);
    }
    else if (operator === "*"){
        return (numar1 * numar2);
    }
    else if (operator === "/"){
        return (numar1 / numar2);
    }
    else if (operator === "^"){
        return (Math.pow(numar1, numar2));
    }
}
console.log (calculeaza (numar1,numar2,operator));