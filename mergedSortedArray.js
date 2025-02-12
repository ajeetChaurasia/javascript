function merge(nums1, m, nums2, n){

let i = m-1;
let j = n-1;
let length = m + n -1;

while(i>=0 && j>=0){
    if(nums1[i]> nums2[j]){
        nums1[length--] = nums1[i--];
        i--;
    }
    else {
        nums1[length--] = nums2[j--];
    }

    while(j>0){
        nums1[length--] = nums2[j--];
    }
}
}

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]
