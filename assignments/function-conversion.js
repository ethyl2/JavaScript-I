const conversionAnswers = [];

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };

let myFunction = () => console.log("Function was invoked!");
myFunction();
conversionAnswers.push(myFunction);

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => param;
anotherFunction("Example");
console.log(anotherFunction("Example"));
conversionAnswers.push(anotherFunction);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
let add = (param1, param2) => param1 + param2;

add(1,2);
console.log(add(1,2));
conversionAnswers.push(add);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
let subtract = (param1, param2) => param1 - param2;
subtract(1,2);
console.log(subtract(1,2));
conversionAnswers.push(subtract);



// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });

// This function triples the numbers of whatever array it's passed.
const triple = array => array.map(num => num * 3);
console.log(triple(exampleArray));
conversionAnswers.push(triple);

//If you wanted triple() to be specific to exampleArray, see below:
// (I don't think that's the intention, but just in case, here it is.)
const tripleSpecific = () => exampleArray.map(num => num * 3);
console.log(tripleSpecific());

//console.log(conversionAnswers);
function showConversionAnswers() {
    let answerSpace = document.getElementById("conversionSection");
    answerSpace.innerHTML += "<br /><p><strong>Conversion Section:</strong> </p>";
    for (let i=0; i<conversionAnswers.length; i++) {
      answerSpace.innerHTML += conversionAnswers[i] + "<br \><br \>";
    }
    return true;
  }