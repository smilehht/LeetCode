/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let len = nums.length;
    let sum = nums[0];
    let temp = sum;

    for(let i = 1; i < len; i++) {

        temp = Math.max(temp + nums[i], nums[i]);
        sum = Math.max(temp, sum);
    }

    return sum;
};

let arr = [1, 2]

console.log(maxSubArray(arr));