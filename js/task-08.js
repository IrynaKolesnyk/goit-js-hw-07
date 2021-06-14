const divControls = document.querySelector('#controls');

const inputNumber = divControls.querySelector('input')

const btnRender = divControls.querySelector('button[data-action="render"]');

const btnDestroy = divControls.querySelector('button[data-action="destroy"]');

const divBoxes = document.querySelector('#boxes');


let value = 0;
const onInputChange = function (event) {
    value = +event.currentTarget.value;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const createBoxes = function (amount) {
    const markup = [];
    let size = 30;
    let color = [0, 255, 0]

    for (let i = 0; i < amount; i++) {
        const divCreate = document.createElement('div');
        divCreate.style.width = size + 'px';
        divCreate.style.height = size + 'px';
        divCreate.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';

        divCreate.classList.add('square')
        markup.push(divCreate)
        size += 10;
    }


    divBoxes.append(...markup);

};

const destroyBoxes = function () {
    divBoxes.innerHTML = '';
};

inputNumber.addEventListener('input', onInputChange);

btnRender.addEventListener('click', () => {
    createBoxes(value);
});

btnDestroy.addEventListener('click', destroyBoxes);




