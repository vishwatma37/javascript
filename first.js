function myFunction() {
    console.log("welcome to Apna College!")
    console.log("welcome to Apna College!")
    console.log("welcome to Apna College!")
}

myFunction();
myFunction();

function myFunction(msg) {
    //parameter -> input
    console.log(msg);
}

myFunction("I love you"); //argument


// function -> 2 numbers, sum

function sum(a,b) {
    console.log(a + b);
}

sum(12,12);

function sum(x,y) {
    // local variables -> scope
    s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);