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


let helloSymbol = Symbol('hello world function');

let myObj = {
  [helloSymbol](){
    return 'Hello World';
  }
}

console.log(myObj[helloSymbol]);

// let iterableObj = {
//   Symbol:iterator(){
//     let dataArray = ['This', 'That', 'Other'];
//     let currentIndex = 0;
//     return {
//       next(){
//         if (currentIndex < dataArray.length){
//           return {value: dataArray[currentIndex++]};
//         } else {
//           return {done: true};
//         }
//       }
//     }
//   }
//   for (let x of iterableObj){
//     console.log(x);
//   }
// }
//
class ArraySubClass extends Array{
  static get [Symbol.species](){
    return Array;
  }
}

let subClassInstance = new ArraySubClass(1,2,3,4,5,6);
let derivedObj = subClassInstance.filter(function(value){
  if (value % 2){
    return value;
  }
});

console.log(derivedObj);
console.log(derivedObj instanceof Array);
console.log(derivedObj instanceof ArraySubClass);


class checkArrayInstance {
  static [Symbol.hasInstance](instance){
    return Array.isArray(instance);
  }
}

let myArray1 = new Array();

console.log(myArray1 instanceof checkArrayInstance);


let primitiveObject = {
  [Symbol.toPrimitive](hint){
    if (hint == 'number'){
      return 100;
    } else if(hint == 'string'){
      return 'this is a string';
    } else{
      return 'this is the default';
    }
  }
}

console.log(+primitiveObject);
console.log(`${primitiveObject}`);
console.log(primitiveObject + ' ');


let myDate = new Date();
let myArray = new Array();
let myObject = new Object();
class myClass{};
let myClassObject = new myClass();

console.log(Object.prototype.toString.call(myDate));
console.log(Object.prototype.toString.call(myArray));
console.log(Object.prototype.toString.call(myObject));
console.log(Object.prototype.toString.call(myClass));

class withToStringTag{
  get [Symbol.toStringTag](){
    return 'withToStringTag';
  }
}

let withToStringTagObj = new withToStringTag();
console.log(Object.prototype.toString.call(withToStringTagObj));


class myClass12{
  firstProp(){return 'First Prop';}
}

with(myClass12.prototype){
  console.log(firstProp())
}

class MyClassWithUnscopables{
  firstProp(){return 'First prop'}

  get[Symbol.unscopables](){
    return {firstProp: true}
  }
  with(MyClassWithUnscopables.prototype){
    console.log(firstProp());
  }
}
