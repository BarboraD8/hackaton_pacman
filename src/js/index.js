
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
    constructor() {
        this.mouth = true;
        this.xposition = 0;
    }

    render(){
        this.element = document.createElement("div")
        this.element.className = "entity entity--pac pacboy-active-light"
        this.pac = this.element.querySelector("entity--pac")
    }

    mount(){
        this.render();
        this.moveRight();
        this.moveLeft();
        this.update();
        return this.element;
    }

    update(){
      this.pac.style.left = `${this.xposition}px`;
    }

    moveRight() {
        document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowRight') {
        this.xposition += 85;
       // this.pac.style.left = `${this.xposition}px`;
        this.mouth = !this.mouth;
           
        if (this.mouth === true) {
            pacBoy.style.backgroundPositionX = 'right';
        } else {
            pacBoy.style.backgroundPositionX = 'left';
        }
    }
        
    })
    }


    moveLeft() {
        document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft') {
        this.xposition -= 85;
       // this.pac.style.left = `${this.xposition}px`;
        this.mouth = !this.mouth;
           
        if (this.mouth === true) {
            pacBoy.style.backgroundPositionX = 'right';
        } else {
            pacBoy.style.backgroundPositionX = 'left';
        }
        this.update()
    }
        
    })
    }


}


const pacc = new Pacman
document.querySelector("#app").appendChild(pacc.mount())
