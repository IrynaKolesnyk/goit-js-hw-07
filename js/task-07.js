const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


const onInputFontSizeChange = function (event) {
    const value = event.currentTarget.value;

    spanEl.style.fontSize = value + 'px';
};

inputEl.addEventListener('input', onInputFontSizeChange);