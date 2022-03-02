// selezione elementi html 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');
const inputDifficolta = document.querySelector('#difficolta');







// funzione per creare i numeri 
function creaNumeri(quantiNumeriDevoCreare, classeDifficolta) {
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        let divNumero = `<div class="${classeDifficolta}">${index}</div>`;
        divContainer.innerHTML += divNumero;
    }
}

/*
function creaNumeri(quantiNumeriDevoCreare, classeDifficolta) {
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        let divNumero = document.createElement('div');
        divNumero.classList.add(`${classeDifficolta}`);
        divNumero.innerHTML = index;
        divContainer.append(divNumero);
    }
}
*/






bottonePlay.addEventListener('click', gioca);

function gioca() {

    divContainer.innerHTML = "";

    if (inputDifficolta.value == 'Easy') {
        creaNumeri(49, 'carta_easy');

    } else if (inputDifficolta.value == 'Medium') {
        creaNumeri(81, 'carta_medium');

    } else {
        creaNumeri(100, 'carta_hard');

    }

}