//async fn will always returns a promise

//returns a normal value
// async function getData(){
//     return 'value';
// }

// console.log(getData()) //if async returns a normal value then JS automatically wrap that with a promise and returns that promise
// const returnedPromise = getData();
// returnedPromise.then(res => console.log(res))

// //return a promise
// let promise = new Promise((resolve, reject) => {
//     resolve('Promise resolved :)')
// })

// async function getDatafromPromise(){
//     return promise;
// }
// let result = getDatafromPromise();
// result.then(res => console.log(res))


//diff between traditional promise resolve and async await promise resolve
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 10000)
// })

// function getDataUsingTraditionalWay(){
//     console.log('------------------')
//     p.then(res => console.log(res));
//     console.log('hello world');
// }
// getDataUsingTraditionalWay();


// async function getDataUsingAwait(){
//     let res = await p;
//     console.log('hello world');
//     console.log(res)
//     console.log('Got it');
// }
// getDataUsingAwait();


//how await works
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 10000)
// })

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 5000)
// })

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 5000)
// })

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 10000)
// })

// async function getDetails(){
//     console.log('Hello');
//     let res = await pr;
//     console.log('Start');
//     console.log(res);
//     console.log('End')

//     console.log('Helloooo');
//     let res2 = await pr2;
//     console.log('Start2');
//     console.log(res2);
//     console.log('End2')
// }
// getDetails()


//async await in fetch

// const API_URL = 'https://api.github.com/users/rinta-git'
// async function getData(){
//     let data = await fetch(API_URL);
//     let resp = await data.json();
//     console.log(resp)
// }
// getData()

//Error handlinng in async await
//async await in fetch

const API_URL = 'https://api.github.com/users/rinta-gassdit'
async function getData(){
    try{
    let data = await fetch(API_URL);
    let resp = await data.json();
    console.log(resp)
    }
    catch(err){
        console.log(err)
    }
}
getData()