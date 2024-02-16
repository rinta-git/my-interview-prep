let arr = [1,2,34]
let arr2 = arr;
arr2[3] = 10; //modifies both array
console.log(arr)
console.log(arr2)
//o/p
/**
 * arr = [1,2,34,10]
 * arr2 = [1,2,34,10]
 */

//shallow copy : doesn't modify original array but won't work with nested array
let arr3 = [1,2,34]
let arr4 = [...arr3];
arr4[1] = 10; 
console.log(arr3)
console.log(arr4)
//o/p
/**
 * arr3 = [1,2,34]
 * arr4 = [1,10,34]
 */

//deep copy: copy nested array without modifying original array
let arrDeep = [1,2,34,6,[0,7]]
let arrCopy = JSON.parse(JSON.stringify(arrDeep));
arrCopy[4] = 234; 
console.log(arrDeep)
console.log(arrCopy)


//deep copy is creating another reference for copied array
//the shallow copy is not worked on nested array because we tried to access same memory location or reference
//map will return new array, so it will be a new reference
let obj = {
    a:{
        b:{
            c:100
        }
    }
}

let obj2= obj;
obj2.a.b = 3; //both will be modified
console.log(obj)
console.log(obj2)

const deepCopy = function (val){
   if(['number','string','boolen'].includes(typeof val)){
    return val;
   }
   else if(Array.isArray(val)){
    return val.map(item => deepCopy(item))
   }
   else{
        return Object.keys(val).reduce((acc,curr) => {
            acc[curr] = deepCopy(val[curr])
            return acc
        },{})
   }
}

let copy = deepCopy(arrDeep)
copy[4] = 105;
console.log('mine', arrDeep)
console.log('mine', copy)


let deepObj = {
    a:{
        b:{
            c:100
        }
    }
}

let copyObj = deepCopy(deepObj)
copyObj.a.b = 3;
console.log(deepObj)
console.log(copyObj)