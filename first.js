// for each Loop in Arrays
// arr.forEach(callBackFunction)
// callBackFunction:Here,it is a function to execute for each element in the Array
// *A callback is a function passed as an argument to another function.

                // aar.forEach((val) => {
                //     console.log(val);
                // })


let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) {
    console.log(val);
});