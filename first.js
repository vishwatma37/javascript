let cities = ["delhi", "puna", "mumbai", "gurgaon"];

for (let city of cities){
    // console.log(city);
    console.log(city.toUpperCase())
}




let marks = [85,97,44,37,76,60];

let sum = 0;

for (let mark of marks){
    sum += mark;
// console.log(mark);
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}` );

let items = [250,645,300,900,50];

let i = 0;
for (let val of items){
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}


let items = [250,645,300,900,50];

for (let i = 0; i < items.length; i++) {
   let offer = items[i] / 10;
   items[i] -= offer;
}

console.log(items);
