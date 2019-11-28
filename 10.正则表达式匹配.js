/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    if (s == p) {
        return true;
    }
    let sLen = s.length;
    let pLen = p.length;

    let tempP = p;
    let hasMath = false;
    for(let i = 0; i < pLen - sLen + 1; i++) {
        if (p[i] == '*') continue;

        tempP = p;
        let index = i;
        hasMath = false;
        for (let j = 0; j < sLen; j++) {

            // 有相同字符
            if (tempP[index] == '*' && tempP[index - 1] != '.') {
                index++;
            }
            if (s[j] == s[j + 1]) {
                if (tempP[index + 1] == '*') {
                    tempP = tempP.substring(0, index + 1) + s[j] + tempP.substring(index + 1, tempP.length);
                }
            }

            if (tempP[index] == s[j] || tempP[index] == '.') {
                index++;
                hasMath = true;
            } else if (tempP[index] == '*' && tempP[index - 1] == '.') {
                hasMath = true;
            } else {
                hasMath = false;
            }
        } 
        if (hasMath) {
            break;
        }
    }
    
    return hasMath
};

let s = 'aaa';
let p = "ab*ac*a";
console.log(isMatch(s, p))