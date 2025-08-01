// for each Loop in Arrays
// arr.forEach(callBackFunction)
// callBackFunction:Here,it is a function to execute for each element in the Array
// *A callback is a function passed as an argument to another function.

                // aar.forEach((val) => {
                //     console.log(val);
                // })


// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val) {
    // console.log(val);
// });

let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val,idx,arr) => {
    // console.log(val);
    console.log(val.toUpperCase(),idx,arr);
});

let nums = [2,3,4,5,6]

nums.forEach((num) => {

    console.log(num*num);

})



