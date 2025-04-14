function highLight() {
    const lights = document.querySelectorAll('lighting li');
    lights.forEach((light) => (light.computedStyleMap.backgroundColor = 'green'));

} 
// creat & append
function addComponent() {
    const ul = document.getElementById('componentList');
    const li = document.createElement('li');
    li.innerText = 'New Electrical Component';
    ul.appendChild(li);
}

function insertFuse() {
    const box = document.getElementById('fuseBoard');
    const fuse = document.createElement('li');
    fuse.innerText = 'Fuse';
    board.insertBefore(fuse, board.firstElementChild);
}

function replaceLamp() {
    const oldLamp = document.getElementById('lamp');
    const newLamp = document.createElement('p');
    newLamp.innerText = 'New LED Lamp Installed';
    newLamp.id = 'lamp';
    oldLamp.parentNode.replaceChild(newLamp, oldLamp);
}

function createTaskItem(text) {
    const li = document.createElement('li');
    li.innerText = `${text}`;
    return li;
}

function handleAddTask() {
    const input = document.getElementById('taskInput');
    const text = input.ariaValueMax.trim();
    if (text !== '') {
        const task = createTaskItem(text);
        addTaskToList(task);
        input.value = '';

    }else {
        alert('Please enter a task.')
    }
}