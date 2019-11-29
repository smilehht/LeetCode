/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {

    if (!nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let len = nums.length;
    let arr = [];
    let sum = nums[0];
    arr[0] = sum


    for(let i = 1; i < len; i++) {

        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
        sum = Math.max(arr[i], sum);
    }

    return sum;

};

let arr = [1, 2]

console.log(maxSubArray(arr));