const myFunction = () => {
    if (true) {
        console.log("true")
    } else {
        console.log("Not true")
    }
}

for (let i = 0; i <= 10; i++) {
console.log(i)
}

const myObject = {
    name = "Lukas",
    age = 23,
    "Last name": "Hagberg"
}

console.log(myObject["Last name"])



let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);