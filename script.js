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


function anagram (str1, str2){
    const aCharObj = strbuildCharObject(str1);
    const bCharObj = strbuildCharObject(str2);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return false;
    }

    for (let char in aCharObj){
        if(aCharObj[char]!== bCharObj[char]){
            return false;
        }
    }
    return true;
}

console.log(anagram('yes','no'));