// let characterName = "Pinky";
// let quote = `Same thing we do every night ${characterName}`;
// console.log(quote);
//
//
// function countdown(stringLiteralArray, ...values){
//   console.log(stringLiteralArray);
//   console.log(stringLiteralArray[1]);
//   console.log(values);
//   console.log(values[0]);
//   console.log(values[1]);
//
//   let fullSentence = values[0] + stringLiteralArray[1] + values[1] + stringLiteralArray[2];
//   return fullSentence;
// }
//
// let one = 1;
// let two = 2;
// let results = countdown `${one} Mississippi ${two} Mississippi`;
// console.log(results);
//
//
// let seriesOfWords = `This is line one\n This is line two \n This is line three`;
// console.log(seriesOfWords);
//
// let temp = `This is first
// second
// and third line.`;
//
//
// console.log(temp);
//
// function rawWithVars(stringArray, ...values){
//   console.log(stringArray.raw);
//   console.log(stringArray.raw[2]);
//   console.log(stringArray[2]);
// }
//
// let name1 = 'Luke';
// let name2 = 'Jessica';
// let name3 = 'Danny';
// let name4 = 'Matt';
// rawWithVars `${name1} Cage\n ${name2} Jones\n ${name3} Rand\n ${name4} Murdock`;
//
//
// let str = `Today is ${getToday()}`;
// function getToday(){
//   let myDate = new Date();
//   return myDate.getMonth() + 1 + '/' + myDate.getDate() + '/' + myDate.getFullYear();
// }
// console.log(str);
//
//
//
// const asynchronousEmulator = str => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 1000);
//
//     setTimeout(() => {
//       console.log(str);
//       resolve();
//       reject();
//     }, rand)
//   });
//
// }
//
// const ordinalNumbers = () => {
//   asynchronousEmulator("First")
//   .then(() => asynchronousEmulator("Second"))
//   .then(() => asynchronousEmulator("third"))
//   .catch(() => "Something went wrong...");
// };
//
// ordinalNumbers();
//
//


// const promise = str => {
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     typeof str === 'string' ? resolve(str) : reject(str);
//   }, 300);
// });
// }
//
//
// Promise
//   .all([
//     promise("First").catch(err => console.log(err)),
//     promise(42).catch(err => console.log(err)),
//     promise("third").catch(err => console.log(err))
//   ]).then(values => console.table(values));


const rand = () => Math.floor(Math.random() * 1000);


const tortoise = new Promise(function(resolve, reject){
  setTimeout(resolve, rand(), '🐢');
});

const hare = new Promise(function(resolve, reject){
  setTimeout(resolve, rand(), '🐇');
});

Promise.race([
  tortoise,
  hare
]).then(function(value){
  console.log(value);
});
