// let p = new Promise((resolve, reject) => {
//     resolve('Promise resolved')
// })

let p = new Promise((resolve, reject) => {
   setTimeout(() => resolve('Promise resolved'), 10000)
})
let p2= new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise2 resolved'), 5000)
 })

async function handlePromise(){
    console.log('First')
    let resutl =  await p;
    console.log('inbetween')
    console.log(resutl)
    console.log('second')
    let resutl2 =  await p2;
    console.log(resutl2)
    console.log('third')
}

handlePromise()


const API_URL = 'https://jsonplaceholder.typicode.com/posts'
async function handlePost(){
    try{
        let res = await fetch(API_URL);
        let data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
handlePost()


//error handling in async await
const API_URL2 = 'https://dummyurl'
async function handlePost2(){
    try{
        let res = await fetch(API_URL2);
        let data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
handlePost2()