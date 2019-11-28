/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);
    let num = parseInt(str);
    if (num > INT_MAX) {
        return INT_MAX
    }
    if (num < INT_MIN) {
        return INT_MIN
    }
    if (isNaN(num)) {
        return 0;
    }
    return num
};

console.log(myAtoi("-91283472332"))