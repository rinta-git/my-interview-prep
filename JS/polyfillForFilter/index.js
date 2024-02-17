const arr = [3,65,2,57,1,4,2]
const out = arr.filter(item => item%2 ===0)
console.log(out)

Array.prototype.myFilter = function (cb){
    let arr = this;
    let result = [];
    for (let index = 0; index < arr.length; index++) {
         let state = cb(arr[index])
         if(state)
         result.push(arr[index])   
    }
    return result;
}

const res = arr.myFilter(item => item%2==0)
console.log(res)