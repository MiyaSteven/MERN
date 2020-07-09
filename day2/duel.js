'use strict';

class Card {
    constructor(name) {
        this.name = name;
    }

    createCard() {
        console.log(this.name);
        return this.name;
    }
};

class Unit extends Card {
    constructor(name, cost=3, power=3, res=4) {
        super(name);
        this.cost = cost;
        this.power = power;
        this.res = res;
    }

    // child class functions
    // these aren't used yet
    createRed(){
        const name = super.createCard();
        return name;
    }

    createBlack() {   
        const name = super.createCard();
        return name;
    }

    attack(target) {
        target.res = target.res - this.res;
        return target.res;
    }
}

class Effect extends Card {
    constructor(name, cost=0, text, stat, res, magnitude) {
        super(name);
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.res = res;
        this.magnitude = magnitude;
    }
    // working but need to add method to be able to manipulate stats as well
    createHardAlgo() {
        const name = super.createCard();
        return name;
    }
    createPromiseCard() {
        const name = super.createCard();
        return name;
    }
    createPairProgramCard(){
        const name = super.createCard();
        return name;
    }
}

const redUnit = new Unit('Red Belt Ninja');
redUnit.createCard();
console.log(redUnit);

const blackUnit = new Unit('Black Belt Ninja');
blackUnit.createCard();
console.log(blackUnit);

const hardAlgo = new Effect('Hard Algorithm');
hardAlgo.createHardAlgo();
console.log(hardAlgo);

const promiseCard = new Effect('Unhandled Promise Rejection');
promiseCard.createPromiseCard();
console.log(promiseCard);

const pairProgramCard = new Effect('Pair Programming');
pairProgramCard.createPromiseCard();
console.log(pairProgramCard);
