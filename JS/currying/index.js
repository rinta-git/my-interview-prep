let multiply = function (x, y){
    console.log(x*y);
}

//using bind method
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(10);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(10);

let multiplyByFour = multiply.bind(this,4,5);
multiplyByFour(10);

//using closure method
let multiplyWithClosure = function (x){
    return function (y){
        console.log("--------multiplyWithClosure--------");
        console.log(x*y);
    }
}

let multiplyByFive = multiplyWithClosure(5);
multiplyByFive(10);

