document.getElementsByName("adunare")[0].addEventListener('click', adunare);
document.getElementsByName("scadere")[0].addEventListener('click', scadere);
document.getElementsByName("inmultire")[0].addEventListener('click', inmultire);
document.getElementsByName("impartire")[0].addEventListener('click', impartire);
document.getElementsByName("")

function numar1() { 
    return Number(document.getElementsByName('numar1')[0].value) 
}

function numar2() { 
    return Number(document.getElementsByName('numar2')[0].value) 
}

function adunare (){
    document.getElementById('rezultat').value= (numar1()+numar2())
}
function scadere (){
    document.getElementById('rezultat').value= 
    (numar1()-numar2())
}
function inmultire (){
    document.getElementById('rezultat').value= (numar1()*numar2())
}
function impartire (){
    document.getElementById('rezultat').value= (numar1()/numar2())
}
