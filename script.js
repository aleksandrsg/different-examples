// let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(a.reverse());


//FizzBuzz 

let out = document.getElementById('out');

let tmp ='';

fizzBuzz(30);

function fizzBuzz(num){
    for (let i=1; i<=num; i++){
        if (i % 3 === 0 && i % 5 ===0){
            tmp = tmp + 'FizzBuzz' +  '</br>';
        }
        else if (i % 3 === 0){
            tmp = tmp + 'Fizz' + '</br>';
        }
        else if (i % 5 === 0) {
            tmp = tmp + 'Buzz' + '</br>';
        }
        else {
            tmp = tmp + i + '</br>';
        }
    }
}
out.innerHTML= tmp;