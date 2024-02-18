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

//  reference error: variable num2 is not defined
//  1
//  4
//  3
//  9
//  6


// Q2
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