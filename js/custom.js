// let handler = {
//   set (target, key, value){
//     console.info(`property "${key} set on object" ${target}  "with a value of " ${value}`);
//   }
// }
//
// let target = {};
// let proxy = new Proxy(target, handler);
//
// proxy.a = 'a';
// proxy.b = 'b';
// proxy.c = 'c';

// function trapMessage(){
//   return "it's a trap";
// }
//
// let handler = {
//   apply: function(target, thisArg){
//     return target.apply(thisArg);
//   }
// }
//
//
// let proxy = new Proxy(trapMessage, handler);
// console.log(proxy());


let handler = {
  set (target, key, value){
    console.log('Property Set');
  }
}

let target = {};
let revocable = Proxy.revocable(target, handler);
let proxy = revocable.proxy;

proxy.prop1 = 'Prop1';
revocable.revoke();

proxy.prop2 = 'Prop 2';
