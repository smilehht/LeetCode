/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums && !nums.length) {
        return nums;
    }

    var current = nums[0];
    var diff = 0;
    var len = nums.length;
    for (var i = 1; i < len; i++) {
        if (nums[i] == current) {
            diff++;
        } else {
            current = nums[i];
            nums[i - diff] = current;
        }
    }

    return nums.length - diff;
}

console.log(removeDuplicates([1,1,2]));