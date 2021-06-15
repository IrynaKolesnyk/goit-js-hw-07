const inputEl = document.querySelector('#validation-input');

const length = +inputEl.dataset.length;

const onInputChange = function (event) {
    const value = event.currentTarget.value;

    if (value.length === length) {
        updateClass("valid", "invalid");

    } else {
        updateClass("invalid", "valid");
    }
};

function updateClass(add, remove) {
    inputEl.classList.add(add);
    inputEl.classList.remove(remove);
}

inputEl.addEventListener('change', onInputChange);
