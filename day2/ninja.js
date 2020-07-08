'use strict';

const user1 = {
    name: "Kermit",
    email: "kermit@sesame.org"
}

const user1 = {
    name: "Kermit",
    email: "kermit@sesame.org",
    friend: {
        name: "Miss Piggy",
        email: "piggy@sesame.org"
    }
}

// rewrite of parent Vehicle class prt1
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`This Ninja's name is ${this.constructor.name}`);
    }
    showStats() {
        return this.constructor.health + " " + this.constructor.speed + " " + this.constructor.strength;
    }
    drinkSake() {
        return this.health += 10;
    }
}

// parent Vehicle class prt2
// class Vehicle {
//     constructor(manufacturer, model, color) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.color = color;
//         this.miles = 0;
//     }
//     drive() {
//         this.miles += 10;
//         console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child M5 class
// class M5 extends Vehicle {
//     constructor(color) {
//         super("BMW", "M5", color);
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const m5 = new M5("Blue");
// m5.childFunction();


// const Player {
//     constructor() {
//         this.name = name;
//         this.health = 0;
//         this.speed = 0;
//         this.strength = 0;
//     }

//     birthPlayer() {
//         this.health += 100;
//         this.speed += 20;
//         this.strength += 10;
//     }
// }

