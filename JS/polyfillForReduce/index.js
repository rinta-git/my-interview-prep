let arr = [2,4,3,2,1]
let out = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
},0)
console.log(out)



Array.prototype.myReduce = function(cb, initialValue){
    let arr = this;
    let result = initialValue;
    for (let index = 0; index < arr.length; index++) {       
        result = result ? cb(result, arr[index]) : arr[index] //if initial value is not given, it consider 0th index as initial value
    }
    return result;
}

let res = arr.myReduce((acc, curr) => {
    acc += curr;
    return acc;
},0)

console.log(res)