// console app using everything we have learnt this week... be as creative
// will be presented on monday morning

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
    let userInputName = await askQuestion("Please enter your name: ");
    console.log();
    console.log(`Welcome ${userInputName}`);
    console.log("Let's make a coffee.");
    console.log();
    while (true) {
        console.log("Select your option:");
        console.log("[1] Long Black");
        console.log("[2] Flat White");
        console.log("[3] Cappuccino");
        console.log("[4] Latte");
        console.log("[5] No thanks, I don't drink coffee");
        let userInput = await askQuestion("Please select an option:");
        console.log();
        if (userInput == "1") { // option 1 Long Black
            console.log("You have selected Long Black.");
        }
        console.log();
        // else if (userInput == 2) { // option 2 Flat White
        //     console.log("You have selected Flat White.");
        // } else if (userInput == 3) {  // option 3 Cappuccino
        //     console.log("You have selected Cappuccino.");
        // } else if (userInput == 4) {  // option 4 Latte
        //     console.log("You have selected Latte.");
        // } else if (userInput == 5) { // option 5 Doesn't drink coffee
        //     console.log("You have selected that you do not drink coffee.");
        // } else {       // doesn't drink coffee
        //     console.log("That is not a valid option. Please select an option between 1 - 5");
        // }
    }
    console.log("The End.");
    Program().then(() => {
        process.exit(0);
    });
}