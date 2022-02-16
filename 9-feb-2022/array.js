let personName = "Abul Mia";
let personAge = 45;
let personCity = "Bhammon baria"
let maritialStutus = true;

const person = ["Abul Mia", 45, "Bhrammonbaria", true];
console.log(person[0]);

person.push("male");
person.push("Bangladesh");
console.log(person);
person.pop();
console.log(person);
person.shift()
console.log(person);
person.unshift("Singer Mahfuzur Rahman");
console.log(person);
console.log(person.length);
console.log(person.indexOf("Bhrammonbaria"));

const myArray = [
    ['Abul', 50],
    ['Babul', 45],
    ['Bulbul', 35],
    ['Mokbul', 65]
];
console.log(myArray);
console.log(myArray[3][1]);
