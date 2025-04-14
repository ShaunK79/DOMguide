// single - switch
document.getElementById('switchBtn').addEventListener('click', () => { const circuit = document.getElementById('circuit');
circuit.innerText = ' The Circuit is ON';
});
// multiple - highlight
document.getElementById('highlightBtn').addEventListener('click', () => { const lights = document.querySelectorAll('#lightBoard li');
    lights.forEach(light => {
        light.style.backgroundColor = '#62ED00';
    });
});
// add and create
document.getElementById('addComponentBtn').addEventListener('click', () => { const list = document.getElementById('componentList');
    const item = document.createElement('li');
    item.innerText = 'New Electrical Component';
    list.appendChild(item);
});
// insert element
document.getElementById('insertFuseBtn').addEventListener('click', () => {
    const fuseBoard = document.getElementById('fuseBoard');
    const fuse = document.createElement('li');
    fuse.innerText = 'Fuse'
    fuseBoard.insertBefore(fuse, fuseBoard.firstElementChild);
});
// replace element
document.getElementById('replaceLampBtn').addEventListener('click', () => {
    const oldLamp = document.getElementById('lamp');
    const newLamp = document.createElement('p');
    newLamp.innerText = 'New LED Lamp Installed';
    newLamp.id = 'lamp';
    oldLamp.parentNode.replaceChild(newLamp, oldLamp);
});
// remove element
document.getElementById('removeWireBtn').addEventListener('click', () => {
    const wire = document.getElementById('wire');
    wire.remove();
});

