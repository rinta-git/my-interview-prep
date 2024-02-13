
let movementChecker = function (){
    console.log('Mouse moved')
}
let throttle = (fn, d) => {
    let flag = true;
    return function (){
        let context = this;
        let args = arguments;
        if(flag){
          fn.apply(context,args);
          flag = false;
        }        
        setTimeout(()=>{
            flag = true
        },d)
    }
}
let displayText = throttle(movementChecker, 3000)
window.addEventListener('resize', displayText)

/*
*****Explanation*****
- it trigger the callback function on every 3000ms
- initially it trigger first
- then it skips all the intermediate event and trigger the function on next 3000ms. This keeps on going
*/