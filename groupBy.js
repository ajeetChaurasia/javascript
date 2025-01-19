

/**
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
 * The provided callback fn will accept an item in the array and return a string key.
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
 * Please solve it without lodash's _.groupBy function.
 */


Array.prototype.groupBy = function(fn){
    return this.reduce((acc, item)=>{
        const key = fn(item);
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {})


    // const arr = this;
    // const result = {};

    // arr.forEach((item)=>{
    //     const key = fn(item);
    //     if(!result[key]){
    //         result[key] = [];
    //     }
    //     result[key].push(item);
    // })

    // return result;
}


console.log( [
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
      ].groupBy((item) => item.id)
);
