let sentence = "The quick brown fox jumps over the lazy dog.";

// Q1 function that searches for a string inside the given sentence
// function searchInSentence(searchTerm) {
//     return sentence.includes(searchTerm);
// }
// console.log(searchInSentence("fox"));

// Q2 as above, but function should return the index of the first occurence of the string if found, else -1

// function findIndexInSentence(searchTerm) {
//     return sentence.indexOf(searchTerm);}
//     console.log(findIndexInSentence("fox"));

// let foxIndex = sentence.indexOf("fox");
// console.log(foxIndex)

// Q3 write a function that returns the first 3 char of the string

// let firstThreeChar = sentence.substring(0,3)
// console.log(firstThreeChar)

// Q4 write a function that returns the last 2 char of the string

// let lastTwoChar = sentence.substring(sentence.length-2)
// console.log(lastTwoChar)

// Q5 function that converts a string into an array of words where a word is any string separated by a space
// let myNewArray = sentence.split(" ");
// console.log(myNewArray)

// Q6 function that counts the number of times a string appears inside the sentence string above
// let myOtherArray = sentence.split(" ");

function countOccurences(stringToSearch, searchTerm) {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let indexOfSearchTerm = stringToSearch.indexOf(searchTerm, startIndex);
        if (indexOfSearchTerm == -1) {
            break;
        }
        count++;
        startIndex = indexOfSearchTerm + 1
    }
    return count;}
    console.log(countOccurences(sentence, "dog"))
