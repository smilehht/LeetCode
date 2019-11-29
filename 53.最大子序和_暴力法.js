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
    let sum = nums[0];

    for(let i = 0; i < len; i++) {

        let temp = nums[i];
        for (let j = i; j < len; j++) {
            
            j > i && (temp += nums[j]);
            if (temp > sum) {
                sum = temp;
            }
        }
    }

    return sum;

};

let arr = [1, 2]

console.log(maxSubArray(arr));