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


const add = (a) => {
    return function (b) {
      if (b) return add(a + b);
      return a;
    };
  };
  console.log(add(1)(2)(4)());

  
const evaluvate = (action) => {
    return function (a) {
      return function (b) {
        if (action == "sum") console.log(action, a + b);
        else if (action == "multiply") console.log(action, a * b);
        else if (action == "substract") console.log(action, a - b);
        else console.log(action, a / 2);
      };
    };
  };
  
  evaluvate("sum")(4)(2);
  evaluvate("multiply")(4)(2);
  evaluvate("substract")(4)(2);
  evaluvate("divide")(4)(2);
  
