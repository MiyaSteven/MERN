'use strict';

class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`This Ninja's name is ${this.name}`);
    }
    showStats() {
        return this.health + " " + this.speed + " " + this.strength;
    }
    drinkSake() {
        return this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// // parent Vehicle class prt2
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

// rewrite of M5 extends Vehicle
class Sensei extends Ninja {
    constructor(name="SuperNinja", health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength, wisdom);
    }
    // child class functions
    speakWisdom() {
        return wisdom;
    }
    drinkSake() {
        return health;
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

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
