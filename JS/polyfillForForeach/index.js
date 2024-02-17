let arr= [5,3,2,43,9,[0,354,66]];
console.log(arr)
// arr.forEach((item,index) => {
//     console.log('item',item +'-'+'index',index)
// })

const cb = function (item, index){
    console.log('item =',item +'-'+'index',index)
}

Array.prototype.myForEach = function (cb){
    const arr = this;
    for(let i=0; i<arr.length; i++){
        cb(arr[i],i)
    }
}

arr.myForEach(cb)