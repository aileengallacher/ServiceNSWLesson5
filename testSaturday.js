let me = {
    name: "Aileen",
    age: 37,
    // hobbies = [
    //     "Shopping",
    //     "Baking",
    //     "Sleeping"
    // ]
};
me.hobbies = [
    "Shopping",
    "Baking",
    "Sleeping"
];


let hobbies = "My hobbies are ";
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;
    if(i == me.hobbies.length - 2) {
        // For the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){
        // For the last element
        hobbies += ".";
    } else {
        // For all the other elements
        hobbies += ", ";
    }
}
console.log(hobbies)