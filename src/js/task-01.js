const categoriesEl = document.querySelector('#categories');
const categoryItemsEl = categories.querySelectorAll('li.item');
console.log(`В списке ${categoryItemsEl.length} категории.`);

categoryItemsEl.forEach(element => {
    const categoryTitleEl = element.querySelector('h2');

    const categoryCountEl = element.querySelectorAll('li');

    console.log(`
        • Категория: ${categoryTitleEl.textContent}
        • Количество элементов: ${categoryCountEl.length}
    `);
});