// selezione elementi html 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');








// funzione per creare i numeri 
function creaNumeri(quantiNumeriDevoCreare) {
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        let divNumero = `<div class="carta_easy">${index}</div>`;
        divContainer.innerHTML += divNumero;
    }
}


creaNumeri(49);