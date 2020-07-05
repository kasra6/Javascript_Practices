// function *myGen(){
//   yield 'generator function';
// }
//
// let iterator = myGen();
// console.log(iterator.next());
// console.log(iterator.next());
//
// let GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
// let myGenFunction = new GeneratorFunction('value', 'yield value');
// let myGenIterator = myGenFunction();
//
// console.log(myGenIterator.next());
// console.log(myGenIterator.next());
//
//
// function *numCount(){
//   let count = 0;
//   while (count < 5)
//     yield count++;
// }
//
// let irt = numCount();
// console.log(irt.next());
// console.log(irt.next());
// console.log(irt.next());
// console.log(irt.next());
// console.log(irt.next());
// console.log(irt.next());
//
// function *returnMSG(){
//   var val = yield val;
//   return val;
// }
//
// let it = returnMSG();
// console.log(it.next());
// console.log(it.next('things'));
// console.log(it.next());

//
// function *insideThrow(){
//   while (true){
//     try {
//       yield 'inside try block';
//     } catch(e){
//       console.log('inside catch');
//     }
//   }
// }
//
//
// let it = insideThrow();
// console.log(it.next());
// console.log(it.throw(new Error('This is an error')));
//
// function *outsideThrow(){
//   var value = yield value;
//   return value;
// }
//
// let it2 = outsideThrow();
// console.log(it2.next());
//
// try{
//   console.log(it2.next('outside try block'));
//   console.log(it2.throw(new Error("A typical error")));
// } catch(e) {
//   console.log('Outside catch');
// }
//
// let countdown = {
//   max: 3,
//   [Symbol.iterator](){
//       return this;
//   },
//   next(){
//     if (this.max == undefined) {
//       this.max = max;
//     } else if (this.max > -1) {
//       return {value: this.max --};
//     } else {
//       return {done: true};
//     }
//   }
// };
//
// for (let i of countdown){
//   console.log(i);
// }


let fibObj = {
  one: 0,
  two: 1,
  temp: 0,
  [Symbol.iterator](){
    return this;
  },
  next(){
    this.temp = this.two;
    this.two = this.temp + this.one;
    this.one = this.temp;
    return {value: this.two}
  }

}

for (let i = 0; i < 1000; i++){
  console.log(fibObj.next().value)
}
