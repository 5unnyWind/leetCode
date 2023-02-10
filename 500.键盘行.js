/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var map = {
        q: 1,
        w: 1,
        e: 1,
        r: 1,
        t: 1,
        y: 1,
        u: 1,
        i: 1,
        o: 1,
        p: 1,
        a: 2,
        s: 2,
        d: 2,
        f: 2,
        g: 2,
        h: 2,
        j: 2,
        k: 2,
        l: 2,
        z: 3,
        x: 3,
        c: 3,
        v: 3,
        b: 3,
        n: 3,
        m: 3
    }
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        var flag = true;
        for (var j = 1; j < word.length; j++) {
            if (map[word[j]] !== map[word[j - 1]]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(words[i]);
        }
    }
    return result;
};
// @lc code=end

