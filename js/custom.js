// let companyBio = 'Twitter is an online social ...';
// let simplePattern = /(twitter)/gi;
// let simplePatternConstructor = new RegExp(simplePattern);
// console.log(simplePatternConstructor.exec(companyBio));


// let words = `Mofth mon darth`;
// words += `\nMouth mouse mouth`;
//
// let multilineExpression = /mon | mouse/gi;
//
// let multiLineResult = multilineExpression.exec(words);
//
// console.log(multiLineResult);
//
//
// let groupOfWords = 'cats, bats, dogs, logs, cogs';
// let groupRegX = /[cb]ats|[dl]og/;
// console.log(groupRegX.exec(groupOfWords));
//
// let textWithNumbers = 'USS Enterprise 1701-D';
// let searchNumbers = /[0-9]/;
// let searchNumbersGreedy = /[0-9]+/;
//
// console.log(searchNumbers.exec(textWithNumbers));
// console.log(searchNumbersGreedy.exec(textWithNumbers));


// let startAnchor = /^M/;
// let multiLineAnchor = /^M/m;
// let endOfLineAnchor = /binks.$/gm;
// let firstInstanceAnchor = /\ar/;
// let startOrEndAnchor = /^darth|binks.$/;
//
// console.log(startAnchor.exec(ipsumString));
// console.log(multiLineAnchor.exec(ipsumString));
// console.log(endOfLineAnchor.exec(ipsumString));
// console.log(firstInstanceAnchor.exec(ipsumString));
// console.log(startOrEndAnchor.exec(ipsumString));

let ipsumString = 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
ipsumString += 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks. file_record_transcript.pdf';

let groupOfFilesNoExtension = /(.*)\.pdf/;
let gropuOfFilesWithExtension = /(.*)\pdf/;

console.log(groupOfFilesNoExtension.exec(ipsumString));
console.log(gropuOfFilesWithExtension.exec(ipsumString));




// let greedyQuantifier = /b+/;
// console.log(greedyQuantifier.exec(ipsumString));
//
// let docileQuantifier = /.*k-/;
// console.log(docileQuantifier.exec(ipsumString));
//
// let lazyQuantifier = /jabba*?/;
// console.log(lazyQuantifier.exec(ipsumString));
//
// let helpfulQuantifier = /.*?yavin/;
// console.log(helpfulQuantifier.exec(ipsumString));
