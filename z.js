/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
    let arr = [];

    let index = numRows;
    while (index--) arr.push([]);

    let down = true;
    let temp = 0;
    index = 0;
    len = s.length;
    while (index < len) {


        arr[temp].push(s.charAt(index))
        if (numRows > 1) {

            if (temp == 0 || temp == numRows - 1) {
                down = !down
            }
            down ? temp-- : temp++
        }

        index++;
    };

    let res = ''
    arr.forEach((item) => {
        res += item.join('');
    })
    return res;

};

convert('12', 1)

