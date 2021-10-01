"use strict";

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
    this.mouth = true;
    this.xposition = 0;
    this.yposition = 0;
    this.direction = "right";
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "entity entity--pac pacboy-active-light";
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        this.moveLeft();
      } else if (event.code === "ArrowRight") {
        this.moveRight();
      }
      if (event.code === "ArrowUp") {
        this.moveUp();
      } else if (event.code === "ArrowDown") {
        this.moveDown();
      }
      this.update();
    });
  }

  mount() {
    this.render();
    //this.moveRight()
    //this.moveLeft()
    this.update();
    return this.element;
  }

  update() {
    this.element.style.left = `${this.xposition}px`;
    this.element.style.top = `${this.yposition}px`;

    if (this.mouth === true) {
      this.element.style.backgroundPositionX = "left";
    } else {
      this.element.style.backgroundPositionX = "right";
    }

    if (this.direction === "left") {
      this.element.style.backgroundPositionY = "-85px";
    }

    if (this.direction === "right") {
      this.element.style.backgroundPositionY = "0px";
    }

    if (this.direction === "up") {
      this.element.style.backgroundPositionY = "-255px";
    }

    if (this.direction === "down") {
      this.element.style.backgroundPositionY = "-170px";
    }
  }

  moveRight() {
    this.mouth = !this.mouth;
    if (this.xposition <= 850) {
      this.xposition += 85;
      // this.pac.style.left = `${this.xposition}px`;

      this.direction = "right";
    }
  }

  moveLeft() {
    this.mouth = !this.mouth;
    if (this.xposition >= 85) {
      this.xposition -= 85;

      this.direction = "left";
    }
  }

  moveUp() {
    this.mouth = !this.mouth;
    if (this.yposition >= 85) {
      this.yposition -= 85;

      this.direction = "up";
    }
  }

  moveDown() {
    if (this.yposition <= 340) this.yposition += 85;
    this.mouth = !this.mouth;
    this.direction = "down";
  }
}

class Stage {
  constructor() {
    this.entities = [];
  }
  render() {
    this.element = document.createElement("div");
    this.element.className = "stage";
  }
  mount() {
    this.render();
    return this.element;
  }

  collisionDetection(x, y) {
    this.entities.forEach((entity) => {
      if (entity.x === x && entity.y === y) {
        return entity.type;
      } else {
        return null;
      }
    });
  }
}

class Entity {
  constructor(xCoordinates, yCoordinates, type) {
    this.xCor = xCoordinates;
    this.yCor = yCoordinates;
    this.type = type;
  }
  render() {
    this.element = document.createElement("div");
    // this.element.style.width = "85px";
    // this.element.style.height = "85px";
    if (this.type === "wall") {
      this.element.className = "entity entity--wall";
      this.element.style.left = `${this.xCor}px`;
      this.element.style.top = `${this.yCor}px`;
    } else if (this.type === "apple") {
      this.element.className = "entity entity--apple";
    } else if (this.type === "bomb") {
      this.element.className = "entity entity--bomb";
      this.element.style.left = `${this.xCor}px`;
      this.element.style.top = `${this.yCor}px`;
    }
  }

  mount() {
    this.render();
    stage.entities.push(
      (this.type = { x: this.xCor, y: this.yCor, type: this.type })
    );
    return this.element;
  }
}

const stage = new Stage();
document.querySelector("#app").appendChild(stage.mount());

const pacc = new Pacman();
document.querySelector(".stage").appendChild(pacc.mount());

const apple = new Entity(5, 5, "apple");
document.querySelector(".stage").appendChild(apple.mount());

const wall = new Entity(85, 85, "wall");
document.querySelector(".stage").appendChild(wall.mount());

const bomb = new Entity(170, 170, "bomb");
document.querySelector(".stage").appendChild(bomb.mount());
console.log(stage.entities);
