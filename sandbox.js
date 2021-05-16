//const todos = document.querySelectorAll('li');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const remove = document.querySelectorAll('.remove');
const list = document.querySelector('ul');
const data = document.querySelector('input');


reset.addEventListener('click', () => {
    let list = document.querySelectorAll('li');
    list.forEach(element => {
        element.style.display = 'block';
        element.style.textDecoration = 'none';
    });
});

add.addEventListener('click', () => {
    let addVal = data.value;
    if (addVal != null && addVal != undefined && addVal != '') {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.textContent = 'X';
        button.setAttribute('class', 'remove');
        li.textContent = addVal;
        li.append(button);
        list.prepend(li);
    } else {
        alert('Please write something to add.')
    }
});

// todos.forEach(element => {
//     element.addEventListener('click', e => {
//         if (e.target.children.length > 0) {
//             if (e.target.style.textDecoration == 'line-through') {
//                 e.target.style.textDecoration = 'none';
//             } else {
//                 e.target.style.textDecoration = 'line-through';
//             }
//         }
//     });
// });

list.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        if (e.target.style.textDecoration == 'line-through') {
            e.target.style.textDecoration = 'none';
        } else {
            e.target.style.textDecoration = 'line-through';
        }
    }
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
