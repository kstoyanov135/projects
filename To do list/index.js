const form = document.querySelector('#add-form');
const input = document.querySelector('#item');
const todoList = document.querySelector(`#todo-list`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const item = input.value;

    if (item === '') {
        // If the input field is empty, do not create the "Done" button
        return;
      }
      
    const li = document.createElement('li');
    li.innerHTML = item;

    const doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    doneButton.addEventListener('click', () => {
        li.classList.add('done');
    });
    li.appendChild(doneButton);

    todoList.appendChild(li);

    input.value = '';
});