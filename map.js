function map(arr, callback){
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        newArr.push(callback(arr[i], i));
    }

    return newArr;
}

console.log(map([1,2,3], (num) => num * 2)); // [2,4,6]