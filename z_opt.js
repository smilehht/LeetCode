/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var arr = [];
    var index = numRows;
    while (index--) arr.push('');
    var down = true;
    let temp = 0;
    index = 0;
    len = s.length;
    while (index < len) {
        arr[temp] += s.charAt(index)
        if (numRows > 1) {

            if (temp == 0 || temp == numRows - 1) {
                down = !down
            }
            down ? temp-- : temp++
        }
        index++;
    };
    return arr.join('');

};

convert('LEETCODEISHIRING', 4)

