

function memoize(fn){
    let cache = {};
    return function(...args){
    const key = JSON.stringify(args);
    if(key in cache){
        return cache[key];
    }

    const result =  fn.apply(this, args);
    cache[key] = result;
    return result;
    }
}

const memoizedSum = memoize(function(a, b) {
    return a + b;
  });
  
  console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
  console.log(memoizedSum(2, 3)); // Output: 5


  function memoizeMap(fn){
    let cache = new Map();

    return function(...args){
        const key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key,result);
        return cache.get(key);
    }
  }