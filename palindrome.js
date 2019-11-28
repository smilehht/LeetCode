/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let rev = s.split('').reverse().join('');
    if (s == rev) {
        return s
    }
    var i, j, len = s.length;
    var maxlen = 0, start=0, end=0;
    for (i = 0; i < len; i++) {
        var temp = i;
        var tempstart = i;
        var tempend = i;
        var length = 0;
        for (j = 0; j < len; j++) {

            if (s.charAt(temp) == rev.charAt(j)) {
                length++;
                tempstart = i;
                tempend = temp;
                temp++;
            } else {
                length = 0;
            }
            if (length > maxlen) {
                start = tempstart;
                end = tempend;
                maxlen = length;
            }
        }
    }
    if (maxlen > 0) {
        return s.substring(start, end + 1)
    }
    return '';
}

longestPalindrome("aacdefcaa");