//Write a program arg in first is > arg in second for the given question - console.log(first(30).second(20));
const first = function (a) {
  return {
    second: function (b) {
      if (a > b) {
        return true;
      }
      return false;
    },
  };
};

console.log(first(30).second(20));



//Write a program to count number of 0's and 1's but makesure you don't add any conditional check for explicitly looking for 0 and 1
//also iterate array only once

const arr2 = [1,0,1,0,1,1,0]
//count of 0= 3
//count of 1 = 4

function getCounts(arr){
	let count0 = 0;
  let count1 = 0;
  for(let i=0; i<arr.length; i++){
  	if(arr[i])
    count1++
    else
    count0++
  }
  console.log(count0)
  console.log(count1)
}

getCounts(arr2)

//Write a program to find sum of array of objects
const arr = [{a:10,b:2}, {c:2, d:13}, {a:2,c:5}]
//{a:12,b:2,c:7,d:13}

const sum = function(arr){
	let out = arr.reduce((acc,curr) => {
  	for(let key in curr){
    	if(!acc.hasOwnProperty(key)){
      	acc[key] = curr[key]
      }
      else{
      	acc[key] += curr[key]
      }
    }
    return acc;
  },{})
  return out
}

let out = sum(arr)
console.log(out)
