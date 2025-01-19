

let flattenArray = function(arr){
    return arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item)
    },[])
}


console.log(flattenArray([1,2,3,[4,5]])); // [1,2,3,4,5]


let flatArrayWithDepth = function(arr, depth){
    if(depth === 0) return arr;
    return arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item) && depth > 1 ? flatArrayWithDepth(item, depth-1) : item)
    },[])
}

console.log(flatArrayWithDepth([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]


var flat = function (arr, n) {
    if(n===0) return arr;
    let flatArr = [];
    for(let i=0; i< arr.length; i ++){
        Array.isArray(arr[i]) ? flatArr.push(...flat(arr[i], n-1)) : flatArr.push(arr[i])
    }

    return flatArr;
};

console.log(flatArr([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
