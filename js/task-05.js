const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onOutput);

function onOutput(event) {

    const inputValue = event.target.value;

    if (inputValue === "") {
        outputEl.textContent = "незнакомец";
    } else {
        outputEl.textContent = inputValue;
    };
}

