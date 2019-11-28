/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == p || p == '.*') {
        return true;
    }


    let sLen = s.length;
    let pLen = p.length;
    let hasMatch = false;
    let sLast;


    // 循环p
    for (let i = 0; i < pLen - sLen + 1; i++) {

        if (s[0] != p[i] && p[i] != '.') {
            hasMatch = false;
            continue;
        }


        if (s[0] == p[i] ||  p[i] == '.') {
            hasMatch = true;
            let idx = i;
            for (let j = 0; j < sLen; j++) {

                if (!hasMatch) {
                    break;
                }

                if (s[j] == p[idx] || p[idx] == '.') {
                    console.log('1', j, idx, p[idx], s[j]);
                    hasMatch = true;
                    idx++;

                } else if (p[idx] == '*' && p[idx - 1] == s[j]) {
                    console.log('2', j, idx, p[idx], s[j]);

                    hasMatch = true;
                    idx++;

                }  else if (p[idx] == '*' && p[idx - 1] != '.' && p[idx - 1] != s[j]) {
                    console.log('3', j, idx, p[idx], s[j]);

                    idx++;
                    j--;

                } else if (s[j] != p[idx] && p[idx + 1] == '*') {
                    console.log('4', j, idx, p[idx], s[j]);

                    idx += 2;
                    j--;

                } else if (p[idx] == '*' && p[idx - 1] == '.') {
                    console.log('5', j, idx, p[idx], s[j]);

                    hasMatch = true;
                    idx++;

                } else {
                    console.log('6', j, idx, p[idx], s[j]);
                    hasMatch = false;
                }

            }

            sLast = idx;
            console.log(p[sLast], idx, pLen)

            // 继续判断p
            while (idx < pLen) {

                if (p[idx] && p[idx + 1] == '*') {

                    hasMatch = true;
                    idx += 2;

                } else if (p[sLast - 1] == '*' && p[idx] == p[sLast - 2]) {

                    hasMatch = true;
                    idx++;

                } else if (hasMatch && !p[idx]) {

                    hasMatch = true;

                } else {
                    hasMatch = false;
                    break;
                }
            }
            // if (hasMatch) {
            return hasMatch;
        }

    }

    return hasMatch;

}

console.log(isMatch(
    'aaa',
    '.*'
));