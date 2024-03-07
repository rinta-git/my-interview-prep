//WAP fro sum(1)(2)(3)...(n)()

let sum = function (a){
    return function (b){
        if(b)
            return sum(a + b);
        else
            return a;
    }
}

// let sum = () => a => b => b ? sum(a+b) : a;

let result  = sum(1)(2)(5)();
console.log(result)


//WAP to reverse a string using recursion
const reverse = function (str){
    return str === '' ? '' : reverse(str.substr(1)) + str.charAt(0);
}

let reversedStr = reverse('rinta')
console.log(reversedStr)

//WAP to reverse a string 
let str = 'Good Morning';
let output = str.split('').reverse().join('');
console.log(output)

//WAP to reverse an array of strings using slice
let arr = ['A','B','C','D','E']
let rev = arr.slice().reverse();
console.log(rev)


//WAP to reverse an array of strings using splice
let arr2 = ['F','G','H','I'];
let rev2 = []
for(let i=arr2.length-1; i>=0; i--){
   let newArr = arr2.splice(i,1)
   rev2.push(newArr)
}
console.log(rev2.flat(1))