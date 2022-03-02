// selezione elementi html 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');
const inputDifficolta = document.querySelector('#difficolta').value;







// funzione per creare i numeri 
function creaNumeri(quantiNumeriDevoCreare) {
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        let divNumero = `<div class="carta_hard">${index}</div>`;
        divContainer.innerHTML += divNumero;
    }
}







bottonePlay.addEventListener('click', gioca);

function gioca() {

    divContainer.innerHTML = "";

    if (inputDifficolta == 'Easy') {
        creaNumeri(49);

    } else if (inputDifficolta == 'Medium') {
        creaNumeri(81);

    } else {
        creaNumeri(100);

    }

}