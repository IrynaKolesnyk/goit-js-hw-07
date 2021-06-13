let counterValue = 0;

function increment() {
    counterValue += 1;
}

function decrement() {
    counterValue -= 1;
}

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    decrement();
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    increment();
    valueEl.textContent = counterValue;
});


