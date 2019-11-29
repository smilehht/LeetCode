/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {

    let len = nums.length;
    let max = nums[0];

    for(let i = 0; i < len; i++) {

        temp = 0;
        for (let j = i; j < len; j++) {
            
            temp += nums[j];
            max = temp > max ? temp : max;
        }
    }

    return max;

};

let arr = [1, 2]

console.log(maxSubArray(arr));