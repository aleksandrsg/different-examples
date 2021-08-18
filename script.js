// let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(a.reverse());


//FizzBuzz 

// let out = document.getElementById('out');

// let tmp ='';

// fizzBuzz(30);

// function fizzBuzz(num){
//     for (let i=1; i<=num; i++){
//         if (i % 3 === 0 && i % 5 ===0){
//             tmp = tmp + 'FizzBuzz' +  '</br>';
//         }
//         else if (i % 3 === 0){
//             tmp = tmp + 'Fizz' + '</br>';
//         }
//         else if (i % 5 === 0) {
//             tmp = tmp + 'Buzz' + '</br>';
//         }
//         else {
//             tmp = tmp + i + '</br>';
//         }
//     }
// }
// out.innerHTML= tmp;


//Anagram

// anagram('friend', 'Finder'); // will be true
// anagram('hi', 'bye'); // will be false

//OneLiner Code

// const anagram = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();
// let out = document.getElementById('out');
// out.innerHTML=anagram('friend', 'Finder');

//Anagram2

function strbuildCharObject(str){
    const charObj = {};
    str = str.toLowerCase();
    for (let char of str ){
        charObj[char]=charObj[char]+1 || 1;
    }

    return charObj;
}


// function anagram (str1, str2){
//     const aCharObj = strbuildCharObject(str1);
//     const bCharObj = strbuildCharObject(str2);

//     if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
//         return false;
//     }

//     for (let char in aCharObj){
//         if(aCharObj[char]!== bCharObj[char]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(anagram('yes','no'));

//Fibonacci 1

// const fibonacci = (num) => {
//     const result = [0,1];

//     for (let i=2; i<=num; i++){
//         const prevNum1 = result[i-1];
//         const prevNum2 = result[i-2];
//         sum = prevNum1+prevNum2
//         result.push(sum);
//     }

//     return result;

// }

// console.log(fibonacci(10));

//Fibonacci short

function fibonacci(num){
    let a =1,
        b =1;
    for (let i=3; i<=num; i++){
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}
console.log(fibonacci(10));
