/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    let sLen = s.length;
    let pLen = p.length;

    let array = [];
    for (let i = 0; i < sLen + 1; i++) {
        let arr = [];
        for (let j = 0; j < pLen + 1; j++) {
            arr.push(false);
        }
        array.push(arr);
    }

    console.log(array)

    array[0][0] = true; //array[i][j] 表示 s 的前 i 个是否能被 p 的前 j 个匹配

    for (let i = 0; i < pLen; i++) {
        if (p[i] == '*' && array[0][i - 1]) {
            array[0][i + 1] = true;
        }
    }

    for (let i = 0; i < sLen; i++) {
        for (let j = 0; j < pLen; j++) {
            if (p[j] == '.' || p[j] == s[i]) {//如果是任意元素 或者是对于元素匹配
                array[i + 1][j + 1] = array[i][j];
            }
            if (p[j] == '*') {
                if (p[j - 1] != s[i] && p[j - 1] != '.') {  //如果前一个元素不匹配 且不为任意元素

                    array[i + 1][j + 1] = array[i + 1][j - 1];

                } else {

                    array[i + 1][j + 1] = (array[i + 1][j] || array[i][j + 1] || array[i + 1][j - 1]);

                }
            }
        }
    }

    return array[sLen][pLen];
}

let s = '';
let p = ".*";
console.log('s:', s)
console.log('p:', p)
console.log(isMatch(s, p))