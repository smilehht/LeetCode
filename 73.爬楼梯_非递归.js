/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var arr = [];
    arr[0] = 1;
    arr[1] = 2;
    for (var i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

console.log(climbStairs(45))