'use strict'

//const pacBoy = document.querySelector('.pacboy-active-light');
// const pac = document.querySelector('.entity--pac');
// let mouseopen = false;
// /let xpos = 0;

/*
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

*/
class Pacman {
  constructor() {
    this.mouth = true
    this.xposition = 0
    this.yposition = 0
    this.direction = 'right'
  }

  render() {
    this.element = document.createElement('div')
    this.element.className = 'entity entity--pac pacboy-active-light'
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') {
        this.moveLeft()
      } else if (event.code === 'ArrowRight') {
        this.moveRight()
      }
      if (event.code === 'ArrowUp') {
        this.moveUp()
      } else if (event.code === 'ArrowDown') {
        this.moveDown()
      }
      this.update()
    })
  }

  mount() {
    this.render()
    //this.moveRight()
    //this.moveLeft()
    this.update()
    return this.element
  }

  update() {
    this.element.style.left = `${this.xposition}px`
    this.element.style.top = `${this.yposition}px`

    if (this.mouth === true) {
      this.element.style.backgroundPositionX = 'left'
    } else {
      this.element.style.backgroundPositionX = 'right'
    }

    if (this.direction === 'left') {
      this.element.style.backgroundPositionY = '-85px'
    }

    if (this.direction === 'right') {
      this.element.style.backgroundPositionY = '0px'
    }

    if (this.direction === 'up') {
      this.element.style.backgroundPositionY = '-255px'
    }

    if (this.direction === 'down') {
      this.element.style.backgroundPositionY = '-170px'
    }
  }

  moveRight() {
      this.mouth = !this.mouth
      if (this.xposition <= 850) { 
    this.xposition += 85
    // this.pac.style.left = `${this.xposition}px`;
    
    this.direction = "right"
  }}

  moveLeft() { 
      this.mouth = !this.mouth
      if (this.xposition >= 85){ 
    this.xposition -= 85
   
    this.direction = 'left'}
  }

  moveUp() {
      this.mouth = !this.mouth
      if (this.yposition >= 85) {  
    this.yposition -= 85
    
    this.direction = 'up'}
  }

  moveDown() { 
      if (this.yposition <= 340)
    this.yposition += 85
    this.mouth = !this.mouth
    this.direction = 'down'}
}

const pacc = new Pacman()
document.querySelector('.stage').appendChild(pacc.mount())
