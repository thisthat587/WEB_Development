// You have an array of names and you want to create a new array that contains a modified version of each name. The modified version should have an exclamation mark added at the end of each name. Implement a function addExclamation that takes an array of names as input and returns a new array with modified names.
let names = ["Piyush", "anand", "pankaj", "badal"];

function addExclamation(names){
    let new_names=[];
    names.forEach((name,index) => {
        new_names.push(`${name}!`);
    });
    return new_names;
}

let modified_name=addExclamation(names);
console.log(modified_name);
console.log(names);