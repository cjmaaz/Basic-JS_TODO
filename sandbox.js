const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const popup = document.querySelector('.popup-wrapper');
const search = document.querySelector('.search input');
const generateHTML = todo => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
    li.innerHTML = `
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
    `;
    todos.prepend(li);
};
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length > 0) {
        addForm.reset();
        generateHTML(todo);
    } else {
        popup.style.display = 'block';
    }
    e.stopPropagation();
});
popup.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'B' || e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
    e.stopPropagation();
});
todos.addEventListener('click', e => {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(todos.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todos.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};
search.addEventListener('keyup', e => {
    const term = search.value.trim();
    filterTodos(term.toLowerCase());
});