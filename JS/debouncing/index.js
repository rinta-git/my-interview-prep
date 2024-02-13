let counter = 0;
let getData = function (){
    console.log('data fetched '+counter++)
}
let debounce = (fn, d) => {
    let timer;
    return function (){
        let context = this;
        //arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
        let args = arguments;
        clearTimeout(timer);
        //the timer will have a timerId which can be used to uniquely identify the timer
        timer = setTimeout(() => {
            //apply call expect array as the second parameter
            fn.apply(context,args)
        },d)
    }
}
let searchProducts = debounce(getData, 500)


/*
*****Explanation*****
-each time user releases the key, it trigger debounce method.
-on every invocation, timer is getting reseted or in other words, cancelled the plan for getData() and reschedule it
 for a new time, 500ms in future
-this goes as long as the user hit the key on 500ms

- in debouncing what happens is it calculate the difference between two key stroke event
  and trigger the function only if the difference is greater than the delay
- in simple words, as per the above example, it trigger the function only when user pauses while typing
*/