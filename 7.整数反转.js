/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = 1;
    if (x < 0) {
        sign = -1;
        x *= sign;
    }
    let str = (x + '').split('').reverse().join('');
    let res = parseInt(str) * sign
    if (res > (Math.pow(2, 31) - 1)) {
        return 0
    }
    if (res < -Math.pow(2, 31)) {
        return 0
    }
    return res
};

console.log(reverse(1534236469))