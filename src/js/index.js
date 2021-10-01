
'use strict';

const pacBoy = document.querySelector('.pacboy-active-light');
const pac = document.querySelector('.entity--pac');
let mouseopen = false;
let xpos = 0;



document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        xpos += 85;
        pac.style.left = `${xpos}px`;
        if (mouseopen === true) {
            pacBoy.style.backgroundPositionX = 'right';
        } else {
            pacBoy.style.backgroundPositionX = 'left';
        }
        mouseopen = !mouseopen
    }
});


class Pacman {
    constructor() {}
}

