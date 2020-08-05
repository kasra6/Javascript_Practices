// function sum(numbers){
//   return numbers.reduce((accumulator, currentElement) => {
//     return accumulator + currentElement;
//   }, 0);
// };
//
// console.log(sum([4,5]));


// function sum(number){
//   return number.reduce((acc, cI) => {
//     return acc + cI;
//   }, 0);
// }
//
// console.log(sum([2,3]));


function sum(numbers){
  return numbers.reduce((sum, nextNum) => sum + nextNum, 0)
}

console.log(sum([4,5]));


function addOneToEach(numbers){
  return numbers.map(num => ++num);
}

console.log(addOneToEach([2,3]));


Array.prototype.map = function(mapper){
  return this.reduce((acc, cI) => {
    const mappedCurrentIndex = mapper(currentElement);
    acc.push(mappedCurrentIndex)
    return acc;
  })
}
