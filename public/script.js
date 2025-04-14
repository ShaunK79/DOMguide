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

document.getElementById('addComponentBtn').addEventListener('click', () => { const list = document.getElementById('componentList');
    const item = document.createElement('li');
    item.innerText = 'New Electrical Component';
    list.appendChild(item);
});