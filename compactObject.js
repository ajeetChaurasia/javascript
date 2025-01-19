/**
 * Given an object or array obj, return a compact object.
 * A compact object is the same as the original object, except with keys containing falsy values removed. 
 * This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
 * A value is considered falsy when Boolean(value) returns false.
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */


let compactObject = function(obj){

    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    if(Array.isArray(obj)){
        const compactArr = [];

        for(let i =0; i< obj.length; i++){
            const compactItem = compactObject(obj[i]);
            if(compactItem){
                compactArr.push(compactItem);
            }
        }
        return compactArr;
    }

    const compactObj = {};

    for(const key in obj){
        const compactValue = compactObject(obj[key]);
        if(compactValue){
            compactObj[key] = compactValue;
        }
    }
    return compactObj;
}

console.log(compactObject({a: 1, b: 0, c: false})); // {a: 1}
console.log(compactObject([null, 0, false, 1])); // {a: 1}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // {a: 1}


