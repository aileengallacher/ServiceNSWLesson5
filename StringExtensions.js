let sentence ="The quick brown fox and dog jumps over the lazy dog.";

// String includes
let hasDog = sentence.includes("dog");
console.log(hasDog)
// let myLowerCaseSentence = sentence.toLowerCase();    // how does this work? what is it doing?
// myLowerCaseSentence.includes("dog");
// console.log(sentence.toLowerCase().includes("dog"));

// String.indexof
// let dogIndex = sentence.indexOf("dog");  // position/index is 40
// console.log(dogIndex);
// let invalidIndex = sentence.indexOf("Luke");  // output -1 as there is no Luke in the string
// console.log(invalidIndex)



let firstOccurence = sentence.indexOf("dog");      // will find the first dog  // output index position of first "dog"
let secondOccurence = sentence.indexOf("dog", firstOccurence+1);  // will look for "dog" starting from the next char of the prev result   // output index position of second "dog"
let thirdOccurence = sentence.indexOf("dog", secondOccurence+1);  // will look for "dog" starting from the next char of the prev result   // output -1 as no other "dog" in string
console.log(firstOccurence);
console.log(secondOccurence);
console.log(thirdOccurence);

// finds the number of times something occurs in the string

function countOccurences(stringToSearch, searchTerm) {

    let count = 0;
  
    let startIndex = 0;
  
    while (true) {
  
      let index = stringToSearch.indexOf(searchTerm, startIndex);
  
      if (index == -1) {
  
        break;
  
      }
  
      count++;
  
      startIndex = index + 1;
  
    }
  
    return count;
  
  }
  
  
  console.log(countOccurences(sentence, "dog")); 

  // String.substring
 // returns the part of the string between specified startIndex and endIndex
 let sentence1 = "The quick brown fox and dog jumps over the lazy dog.";
 //console.log(sentence1.substring(10,15));   // outputs char 10 to 14 from string 

//  let input = "fox";    // play around with this to work
//  let newSearch = sentence1.substring(input.length);
//  console.log(newSearch)


// Regular Expressions

