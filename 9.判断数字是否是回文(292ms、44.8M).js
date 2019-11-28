/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) return true;
    let arr = [];
    while(x) {
        y = x % 10;
        x = Math.floor(x/10);
        arr.push(y);
    }
    var i = 0, j = arr.length - 1;
    for(; j >= i; j--, i++) {
        if (arr[i] != arr[j]) {
            return false;
        }
    }
    if (j <= i) {
        return true;
    }
};

console.log(isPalindrome(121))