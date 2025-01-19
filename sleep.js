/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 * @param {*} duration 
 * @returns 
 */

async function sleep(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}