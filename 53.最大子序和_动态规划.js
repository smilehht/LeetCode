/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {

    if (!nums.length) {
        return 0;
    }

    let len = nums.length;
    let sum = nums[0];
    let arr = [];
    arr[0] = sum

    for(let i = 1; i < len; i++) {

        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
        sum = Math.max(arr[i], sum);
    }

    return sum;
};

let arr = [1, 2]

console.log(maxSubArray(arr));