// let h2 = document.querySelector("h2");
// console.dir(h2);

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College students";

// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// let idx = 1;
// for (div of divs) {
//     // console.log(div.innerText);
//     div.innnerText = `new unique value ${idx}`;
//     idx++;
// }


// console.log(divs[0]);
// divs[0].innerText = "new unique value 1";
// divs[2].innerText = "new unique value 3";


let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}