/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.
 */


// function compose(functions){
//     if(!functions.length){
//         return function(x) { return x; };
//     }

//     return function(x){
//         let result = x;
//         for(let i = functions.length-1; i>=0; i--){
//             result = functions[i](result);
//         }
//         return result;
//     }
// }

var compose = function(functions) {
    if(functions.length ===0 ){
        return function(x){return x;};
    }
    return function(x) {
        let result = x;

        for(let i= functions.length -1; i>=0 ; i--){
            result = functions[i](result);
        }
        return result;
    }
};


var compose2 = function(functions) {
    if(functions.length === 0) {
        return function(x){ return x; };
    }

    return functions.reduceRight((prevFn, nextFn)=>{
        return function(x){
            return nextFn(prevFn(x));
        }
    })

}


const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4));