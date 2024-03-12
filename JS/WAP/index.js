//Write a program arg in first is > arg in second for the given question - console.log(first(30).second(20));
const first = function (a) {
  return {
    second: function (b) {
      if (a > b) {
        return true;
      }
      return false;
    },
  };
};

console.log(first(30).second(20));
