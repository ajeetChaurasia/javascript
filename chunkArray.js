

var chunkArray = function(arr, size){
    let _chunk = [];

    for(let i= 0 ; i < arr.length; i+=size){
        _chunk.push(arr.slice(i, i+size))
    }

    return _chunk;

}

console.log(chunkArray([1,2,3,4,5], 2)) // [[1,2], [3,4], [5]];
