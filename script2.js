//HERE tasks for Python from interviews in Javascript 

// #1 Please log out all elements less then 5

//const array = [0,1,1,2,2,3,4,5,10,22,33,44,67,100];

// const f1 = () => {
//     let result = '';
//     for (i=0; i<array.length; i++){
//         if(array[i]<5) result += array[i] +' ';
//     }
//     console.log(result);
// }

// f1();

// let out = document.getElementById('out');
// let newArray = [];
// const f2 = () => {
//     newArray = array.filter(item => item < 5);
// }
// f2();
// out.innerHTML= newArray;

// #2 
// Please find the same values from both arrays

// const a1 = [0,1,1,2,2,3,4,5,10,22,33,44,67,100];
// const b1 = [0,1,1,2,2,6,3,4,5,10,22,33,44,67,100];

// const f3 = () =>{
//     let result = [];
//     for (let i=0; i < a1.length; i++) {
//         if (b1.includes(a1[i])) result.push(a1[i]);
//     }
//     return result;
// }

// Second variant
// const f3_2 = () =>{
//   return a1.filter(item => b1.includes(item));
// }
// console.log(f3_2());


// #3 Task Sort keys in Object

// let d3 ={
//     1: 22,
//     3: 4,
//     4: 3,
//     2: 1,
//     0: 0,
//     9: 9
// }
// //3.1. console.log(d3);
// //3.2. for (let key in d3){
// //     console.log(d3[key]);
// // }

// //3.3.

// function ascFunc(a, b){
//     return a - b;
// }

// function descFunc(a, b){
//     return b - a;
// }

// const f3 = (obj, type = 'asc') =>{
//     let values = Object.values(obj);
//     if (type === 'asc') return values.sort(ascFunc);
//     if (type === 'desc') return values.sort(descFunc);
// }

// console.log(f3(d3, 'asc'));
// console.log(f3(d3, 'desc'));

// Task #4   Combine Objects

// const a4 = {1:10 , 2:20};
// const b4 = {3:30 , 4:40};
// const c4 = {5:50 , 6:60};

// const obj4 = Object.assign({}, a4, b4, c4)

// console.log(obj4);

// Task #5 Convert Number to String

// const a5 = 1234;
// const result = a5.toString();
// console.log(result);
// console.log(typeof result);

// Task #6 Check if String is PalLindrom

// const pallindrom = str => {
//     str = str.toLowerCase();
//     return str == str.split('').reverse().join('');
// }
// console.log(pallindrom('hello'));

//Task #7 Show the first and the last elements of array

// const a7 = [1,2,3,4,5,6,7,8,9,88];
// console.log(a7[0],  a7[a7.length-1]);

// Task #8

