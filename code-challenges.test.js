// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('newArray', () => {
  it('removes the first item from the array and shuffles the remaining content', () => {
    expect(newArray(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(newArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

  // FAIL  week-4-assessment-jricks86/code-challenges.test.js
  // ● newArray › removes the first item from the array and return the rest of the items in the new array

  //   ReferenceError: newArray is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
// input: array
// output: array
// function newArray
function newArray(array) {
//   // Remove the first item from the array
  const firstItem = array.slice(0,1);
//   // Shuffle the remaining items using the Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
//   // create a new array with the elements of the original array using a spread operator, and use slice method to exclude the first element
  return [...array.slice(1)];
}
console.log(newArray(colors1));
console.log(newArray(colors2));

// PASS  week-4-assessment-jricks86/code-challenges.test.js
// 
// newArray
// ✓ removes the first item from the array and shuffles the remaining content (1 ms)



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe('endTally', () => {
  it("return the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })

})
// FAIL  week-4-assessment-jricks86/code-challenges.test.js
// endTally
//   ✕ return the end tally

// ● endTally › return the end tally

//   ReferenceError: endTally is not defined


// b) Create the function that makes the test pass.
// input: object
// output: number - end tally
// function: endTally
// find the difference between upVotes and downVotes
function endTally(votes) {
  return votes.upVotes - votes.downVotes;
}
// console.log(endTally(votes1));
// console.log(endTally(votes2));

// PASS  week-4-assessment-jricks86/code-challenges.test.js
// endTally
//   ✓ return the end tally (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('noDuplicates', () => {
  it('returns a new array with no duplicates', () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"] 
    expect(noDuplicates()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
})
})
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// FAIL  week-4-assessment-jricks86/code-challenges.test.js
// noDuplicates
//   ✕ returns a new array with no duplicates

// ● noDuplicates › returns a new array with no duplicates

//   ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
// input: two arrays
// output: array - no duplicates
// function: noDuplicates

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"] 

function noDuplicates(arr1, arr2) {
  // combine the two arrays using the concat method
  const combinedArray = arr1.concat(arr2);
  // create an empty array to store the unique values
  const uniqueArray = [];
  // loop through the array and check if the value is in the uniqueArray using indexOf method
  for (let i = 0; i < combinedArray.length; i++) {
    if (uniqueArray.indexOf(combinedArray[i]) === -1) {
  // if it is not in the uniqueArray, push it to the uniqueArray using the push method
        uniqueArray.push(combinedArray[i]);
    }
  }
  return uniqueArray;
}

// console.log(noDuplicates(dataTypesArray1, dataTypesArray2));
// when I log the function, it gives me the expected output.  But my test will not pass.  What am I doing wrong?
