function lastnameError(){
  const lastnameAlert = document.querySelector("span.lastname-alert");
  console.log(lastnameAlert);

  lastnameAlert.innerHTML = "Please write your Last Name";
  console.log(lastnameAlert.textContent);
  console.log(lastnameAlert);
  lastnameInput.focus();
}

function validate(e){
  e.preventDefault();

  // checking the input boxes to not be blank
  // if (nameInput.value === ''){
  //   nameError();
  // }

  if (lastnameInput.value === ''){
    console.log("lastname");
    lastnameError();
  }

  // if (phonenumInput.value === ''){
  //   phonenumError();
  // }
  //
  // if (emailInput.value === ''){
  //   emailError();
  //   return false;
  // }

  return true;
}

const lastnameInput = document.querySelector("input[name=lastname]");

const form = document.querySelector("input[type=submit]");

form.addEventListener('click', validate);

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


// function sum(numbers){
//   return numbers.reduce((sum, nextNum) => sum + nextNum, 0)
// }
//
// console.log(sum([4,5]));
//
//
// function addOneToEach(numbers){
//   return numbers.map(num => ++num);
// }
//
// console.log(addOneToEach([2,3]));
//
//
// Array.prototype.map = function(mapper){
//   return this.reduce((acc, cI) => {
//     const mappedCurrentIndex = mapper(currentElement);
//     acc.push(mappedCurrentIndex)
//     return acc;
//   })
// }
