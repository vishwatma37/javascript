// // let i = 1;
// // do {
// //     console.log("apna college");
// //     i++;
// // } while (i <= 5);
    
// // for -of loop
// let str = "Javascript";


// let size = 0;
// for (let i of str) {
//     console.log("i=", i);
//     size++;
// }

// console.log("size of string is", size);


let student = {
    name: "Rahul kumar",
    age: 20,
    cgpa:7.5,
    isPass:true,

};

for(let key in student) {
    console.log("key=", key, "value=", student[key]);
}