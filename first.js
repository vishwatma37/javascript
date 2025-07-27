// let mode = "light";
// let color;

// if (mode ==="dark"); {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color);

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else{
//     color = "white";
// }

// console.log(color);

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else{
//     color = "white";
// }

// console.log(color);


// let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else{
//     color = "white";
// }

// console.log(color);

// let age = 16;

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote");
// }

// let num = 5;

// if(num % 2 === 0) {
//     console.log(num, "is even")
// } else {
//     console.log(num, "is odd")
// }


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }else if (mode === "blue") {
//     color = "blue";
// }else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }

// let age = 16;
// let result = age >= 18 ? "adult" : "not adult";
// console.log (result);

// let age = 25;

// age >= 18 ? console.log("adult") : console.log("not adult"); // simple, compact if-else


// Practice Question

// let input = prompt("Enter a number: "); // use prompt to get input from user
// let num = Number(input); // convert input to number

// if (num % 5 === 0) {
//     console.log(num + " is a multiple of 5.");
// } else {
//     console.log(num + " is not a multiple of 5.");
// }

// Practice question

// let score = 100;
let score = prompt("Enter your score (0-100):");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
}else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}else if (score >= 50 && score <= 59) {
    grade = "D";
}
else if (score >= 0 && score <= 49) {
    grade = "F";
}

console.log("according to your scores, your grade was : ", grade)