const inputEl = document.querySelector('#validation-input');

const length = +inputEl.dataset.length;

const onInputChange = function (event) {
    const value = event.currentTarget.value;

    if (value.length === length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        console.log("valid")
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
        console.log("invalid")
    }
};

inputEl.addEventListener('change', onInputChange);