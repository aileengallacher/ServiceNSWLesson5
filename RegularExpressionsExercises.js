const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i; 
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i; 

// Q1 function that determines if a string contains a valid email address

let mySentence = "Hi my name is Aileen and my email address is aileen.gallacher@service.nsw.gov.au";
let emailCheck = EMAIL_REGEX.test(mySentence)

function testStringContainsEmail(emailString){
    return EMAIL_REGEX.test(emailString)
}
console.log(testStringContainsEmail(mySentence))


// Q2 function to find the index of the first character of a valid url

let urlString = "Shop at http://www.theiconic.com.au";
let urlCheck = URL_REGEX.test(urlString)

console.log(urlCheck);   // checking that there is a valid URL

function findMyValidUrl(urlString){
    return URL_REGEX.test(urlString)
}
console.log(urlString.search(URL_REGEX));