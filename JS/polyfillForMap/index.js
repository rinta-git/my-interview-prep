let arr = [1,23,343,454,86]
let newArr = arr.map(item => item * 30)
console.log(newArr)

Array.prototype.myMap = function (cb){
    let output = [];
    let arr = this;
    for (let index = 0; index < arr.length; index++) {
        output.push(cb(arr[index], index))        
    }
    return output
}

let res = arr.myMap(item => item * 30)
console.log(res)