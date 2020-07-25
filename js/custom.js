let mySym1 = Symbol('This is my first symbol');
let mySym2 = Symbol() //returns false

console.log(mySym1 == mySym2);
console.log(mySym1.toString());

let characterObj = {};
let dad = Symbol();

characterObj.name = 'Kasra';
characterObj.lastname = 'k6';
characterObj.age = '28';
characterObj[dad] = 'Mr. Robot';

console.log(Object.keys(characterObj));


let player1 = Symbol.for('player1');

console.log(Symbol.for('player1') == player1);

let player2 = Symbol.for('player2');
console.log(Symbol.for('player2') == player2);

let sym1 = Symbol.for('player3');
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(player2));
