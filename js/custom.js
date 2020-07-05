let characterName = "Pinky";
let quote = `Same thing we do every night ${characterName}`;
console.log(quote);


function countdown(stringLiteralArray, ...values){
  console.log(stringLiteralArray);
  console.log(stringLiteralArray[1]);
  console.log(values);
  console.log(values[0]);
  console.log(values[1]);

  let fullSentence = values[0] + stringLiteralArray[1] + values[1] + stringLiteralArray[2];
  return fullSentence;
}

let one = 1;
let two = 2;
let results = countdown `${one} Mississippi ${two} Mississippi`;
console.log(results);


let seriesOfWords = `This is line one\n This is line two \n This is line three`;
console.log(seriesOfWords);

let temp = `This is first
second
and third line.`;


console.log(temp);

function rawWithVars(stringArray, ...values){
  console.log(stringArray.raw);
  console.log(stringArray.raw[2]);
  console.log(stringArray[2]);
}

let name1 = 'Luke';
let name2 = 'Jessica';
let name3 = 'Danny';
let name4 = 'Matt';
rawWithVars `${name1} Cage\n ${name2} Jones\n ${name3} Rand\n ${name4} Murdock`;


let str = `Today is ${getToday()}`;
function getToday(){
  let myDate = new Date();
  return myDate.getMonth() + 1 + '/' + myDate.getDate() + '/' + myDate.getFullYear();
}
console.log(str);
