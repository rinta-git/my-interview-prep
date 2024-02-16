const p1 = new Promise((resolve, reject) => {
  resolve("p1 Success");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 Success"), 3000);
});

Promise.all([p1, p2,100])
  .then((res) => console.log(res))
  .catch((e) => console.error(e));

//it accepts an array of promises
//inside it return array of results of input promises which can be accessed using .then and .catch
//iterate over array
//for non promise value resolve it as promise
//counter is enusre all the promises are resolved
//in case any promise failed, simply reject that error
Promise.myAll = function (arr) {
  return new Promise((resolve, reject) => {
    const results = [];
    counter = 0;
    for (let i=0;i<arr.length;i++) {
      Promise.resolve(arr[i])
        .then((res) => {
          results[i] = res;
          counter++;
          if (counter === arr.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

Promise.myAll([p1, p2, 150])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
