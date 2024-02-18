for(var i=0; i<=6; i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000)
}

// o/p
// ----
// 7 immediately print, its on 0th second
// 7 on each seconds from 1 to 6

for(let i=0; i<=6; i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000)
}

// o/p
// ----
// 0
// 1 - from 1st seconds onwards
// 2
// 3
// 4
// 5
// 6

for(var i=0; i<=6; i++){
    function child(param){
        setTimeout(()=>{
            console.log(param)
        },param*1000)
    }
    child(i)
}

// o/p
// ----
// 0
// 1 - from 1st seconds onwards
// 2
// 3
// 4
// 5
// 6