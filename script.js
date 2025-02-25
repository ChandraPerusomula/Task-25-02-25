/*
1.Reverse a string input: hello .? output : olleh
ANS:-
*/

let inputString = "hello";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}

console.log(reversedString);

/*
2.find a even numbers in an array - [23,54,67,64,46,95,98]?
ANS:-

*/

let numbers = [23, 54, 67, 64, 46, 95, 98];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); 

/*
3.find a max in a given number 
            str="258309"
            max=9
            maxindex=5
ANS:-
*/
let str = "258309";
let max = -Infinity; 
let maxIndex = -1;

for (let i = 0; i < str.length; i++) {
  let currentDigit = parseInt(str[i]); 

  if (currentDigit > max) {
    max = currentDigit;
    maxIndex = i;
  }
}

console.log("max=" + max);
console.log("maxindex=" + maxIndex);

/*
4.find a prime numbers upto 2-50 ?
ANS:-
*/

let primeNumbers = [];

for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeNumbers.push(num);
  }
}

console.log(primeNumbers);



/*
iterate an object values and keys using for of loop?
ANS:-
*/



let myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  let keys = [];
  let values = [];
  
  
  let keyIndex = 0;
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) { 
      keys[keyIndex] = key;
      keyIndex++;
    }
  }
  

  let valueIndex = 0;
  for (let key in myObject) {
      if(myObject.hasOwnProperty(key)){
          values[valueIndex] = myObject[key];
          valueIndex++;
      }
  
  }
  
  
  console.log("Keys:");
  let keysLength = 0;
  for (let key in keys) {
    keysLength++;
  }
  
  for (let i = 0; i < keysLength; i++) {
    console.log(keys[i]);
  }
  
  console.log("\nValues:");
  let valuesLength = 0;
  for(let value in values){
      valuesLength++;
  }
  
  for (let i = 0; i < valuesLength; i++) {
    console.log(values[i]);
  }
  
  console.log("\nKey-Value Pairs:");
  let kvLength = 0;
  for(let key in keys){
      kvLength++;
  }
  
  for (let i = 0; i < kvLength; i++) {
    console.log(keys[i] + ": " + values[i]);
  }