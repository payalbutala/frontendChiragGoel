// polyfill for promise.all

// Takes array of promise and return array of result
// It return eother on all success OR failure of any one promise

Promise.all = function (promises) {
  const result = [];

  const newPromise = new Promise(function (resolve, reject) {
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then((data) => {
          // as promise can return in any order so data may mismatch in terms of index
          result[idx] = data;
          if (promise.length === result.length) {
            promise.resolve(result);
          }
        })
        .catch(function (e) {
          reject(e);
        });
    });
  });

  return newPromise;
};

Promise.all([]).then(() => {});

// polyfill for promise.race

Promise.race = function (promises) {
  const newPromise = new Promise(function (resolve, reject) {
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then((data) => {
          promise.resolve(data);
        })
        .catch(function (e) {
          reject(e);
        });
    });
  });

  return newPromise;
};

// polyfill for promise.any

Promise.any = function (promises) {
  const newPromise = new Promise(function (resolve, reject) {
    let count = 0;
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then((data) => {
          promise.resolve(data);
        })
        .catch(function (e) {
          count++;
          if (count === promise.length) {
            reject(e);
          }
        });
    });
  });

  return newPromise;
};
