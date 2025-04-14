// switch
document.getElementById('switchBtn').addEventListener('click', () => { const circuit = document.getElementById('circuit');
circuit.innerText = ' The Circuit is ON';
});

document.getElementById('highlightBtn').addEventListener('click', () => { const lights = document.querySelectorAll('#lightBoard');
    lights.forEach(light => {
        light.computedStyleMap.backgroundColor = 'green';
    });
});