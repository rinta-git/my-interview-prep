//WAP fro sum(1)(2)(3)...(n)()

let sum = function (a){
    return function (b){
        if(b)
            return sum(a + b);
        else
            return a;
    }
}

// let sum = () => a => b => b ? sum(a+b) : a;

let result  = sum(1)(2)(5)();
console.log(result)