//Promise.all()

/*--success case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })


/*--failure case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise3 rejected')
//     },3000)
// })

// Promise.all([pr1, pr2, pr3])
// .then(res => console.log(res))
// .catch(err => console.log(err))



//Promise.allSettled()

/*--success case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })

/*--failure case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise3 rejected')
//     },3000)
// })

// Promise.allSettled([pr1, pr2, pr3])
// .then(res => console.log(res))
// .catch(err => console.log(err))



//Promise.race()

/*--success case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })


/*--failed case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise2 rejected')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })

// Promise.race([pr1, pr2, pr3])
// .then(res => console.log(res))
// .catch(err => console.log(err))




//Promise.any()

/*--success case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })


/*--failed case--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise3 success')
//     },3000)
// })

/*--failed case2--*/
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         resolve('Promise1 success')
//     },5000)
// })

// const pr2 =  new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise2 success')
//     },2000)
// })

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(function (){
//         reject('Promise3 rejected')
//     },3000)
// })

/*--failed case3--*/
const pr1 = new Promise((resolve, reject) => {
    setTimeout(function (){
        reject('Promise1 reject')
    },5000)
})

const pr2 =  new Promise((resolve, reject) => {
    setTimeout(function (){
        reject('Promise2 rejected')
    },2000)
})

const pr3 = new Promise((resolve, reject) => {
    setTimeout(function (){
        reject('Promise3 rejected')
    },3000)
})

Promise.any([pr1, pr2, pr3])
.then(res => console.log(res))
.catch(err => console.log(err.errors))