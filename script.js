// Functie pentru deschiderea oricarei ferestre dupa ID
function deschide(idFereastra) {
    document.getElementById(idFereastra).style.display = "block";
}

// Functie pentru inchiderea oricarei ferestre dupa ID
function inchide(idFereastra) {
    document.getElementById(idFereastra).style.display = "none";
}

// Functia de cautare ramane necesara pentru interactivitate
function cautaReteta() {
    var textCautat = document.getElementById('baraCautare').value.toLowerCase();
    var carduri = document.getElementsByClassName('box-reteta');
    
    for (var i = 0; i < carduri.length; i++) {
        var numeReteta = carduri[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        if (numeReteta.indexOf(textCautat) > -1) {
            carduri[i].style.display = "";
        } else {
            carduri[i].style.display = "none";
        }
    }
}

// Functia de filtrare pe categorii
function filtreaza(categorie) {
    var carduri = document.getElementsByClassName('box-reteta');
    
    for (var i = 0; i < carduri.length; i++) {
        var tip = carduri[i].getAttribute('data-tip');
        
        if (categorie === 'toate' || tip === categorie) {
            carduri[i].style.display = "";
        } else {
            carduri[i].style.display = "none";
        }
    }
}