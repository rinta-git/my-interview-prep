const array = [15, 10, 25, 3, 4, 60];
const arr = [1, 2, 3, 5, 4];

function checkgreater(el) {
  return el > 10;
}
console.log(array.every(checkgreater)); //false

function checklesser(el) {
  return el < 10;
}
console.log(arr.every(checklesser)); //true





Array.prototype.all = function (condition, value) {
  const arr = this;
  let great, flag;
  condition === ">" ?  great = true :   great = false;
  for (let i = 0; i < arr.length; i++) {
    if (great) {
      if (arr[i] > value) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    } else {
      if (arr[i] < value) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  }
  return flag ? true : false;
};

console.log(array.all(">", 10)); //false
console.log(arr.all("<", 10)); //true
