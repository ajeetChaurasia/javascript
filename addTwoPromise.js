
/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
 * The returned promise should resolve with the sum of the two numbers.
 * @param {*} promise1 
 * @param {*} promise2 
 * @returns 
 */
async function  addTwoPromise(promise1, promise2){
    const [val1, val2] = await Promise.all([promise1, promise2]);

    return val1 + val2;
}


const p1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const p2 = new Promise(resolve => setTimeout(() => resolve(5), 40));

console.log(addTwoPromise(p1, p2).then(console.log)); // 7
