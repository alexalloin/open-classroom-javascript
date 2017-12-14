for (var line = 1; line <= 100; line++) {

    if ((line % 3 === 0) && (line % 5 === 0)) {
        console.log("fizzbuzz");
    
    } else if (line % 3 === 0) {
        console.log("fizz");
    
    } else if ((line % 5 === 0) && !(line % 3 === 0)) {
        console.log("buzz");
        
    } else {
        console.log(line)
    }
}
