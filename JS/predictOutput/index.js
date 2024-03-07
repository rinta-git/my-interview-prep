//Task 1
for(var num of [1,4,3,9,6]){
    setTimeout(() => {
      console.log(num)
    }, 1000)
  }
  
  console.log(num)
  
  for(let num1 of [1,4,3,9,6]){
    setTimeout(() => {
      console.log(num1)
    }, 1000)
  }
  
  console.log(num1)

//   o/p
//   ___
//   6

//   6
//   6
//   6
//   6
//   6

//  reference error: variable num1 is not defined
//  1
//  4
//  3
//  9
//  6


//Task 2
const a = [1,2,3,4].forEach(item => {
    return item;
  })
  console.log(a)
  
  const a1 = [1,2,3,4].map(item => {
    return item;
  })
  console.log(a1)

//   o/p
//   ---
//   undefined
//   [1,2,3,4]


//Task 3
console.log(1)
setTimeout(()=>{
  console.log(2)
},1000)
setTimeout(()=>{
  console.log(3)
},0)
console.log(4)

// o/p
// ---
// 1
// 4
// 3
// 2

//Task 4
false == '0' //true; With the loose equality, it coerces the type of the values to make them of the same type
false === '0' //false

//Task 5
const listener1 = () =>{
  setTimeout(()=>{
      console.log('TIMEOUT 1');
  }, 0)
  setTimeout(()=>{
      console.log('TIMEOUT 2');
  }, 1000)
  setTimeout(()=>{
      Promise.resolve().then(()=> console.log('Promise 1'));
  },0);
  console.log('HELLO');
};

const listener2 = () => {
  setTimeout(()=>{
      console.log('TIMEOUT 3');
  }, 0)
  setTimeout(()=>{
      console.log('TIMEOUT 4');
  }, 5000)
  Promise.resolve().then(()=> console.log('Promise 2'));
  console.log('HI');
}

const buttonClick = document.getElementById('btn_click');
buttonClick.addEventListener('click', listener1);
buttonClick.addEventListener('click', listener2);

// o/p
// ---
// HELLO
// HI
// Promise 2
// TIMEOUT 1
// Promise 1
// TIMEOUT 3
// TIMEOUT 2
// TIMEOUT 4