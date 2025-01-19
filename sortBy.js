/**
 * Given an array arr and a function fn, return a sorted array sortedArr. 
 * You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
 * sortedArr must be sorted in ascending order by fn output.
 * You may assume that fn will never duplicate numbers for a given array
 * @param {*} arr 
 * @param {*} fn 
 * @returns 
 */
Array.prototype.sortBy = function(fn){
    return this.sort((a,b)=> fn(a) - fn(b));
}

console.log([1,2,3].sortBy((a)=>a)); // [1,2,3]


let sortBy = function (arr, fn){
    return arr.sort((a,b)=> fn(a) - fn(b));
}

console.log(sortBy([1,2,3], (a)=>a)); // [1,2,3]
console.log([{"x": 1}, {"x": 0}, {"x": -1}].sortBy((d) => d.x));

