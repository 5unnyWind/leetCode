/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrime = new Array(n).fill(true);
    var ans = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime[i]) {
            ans++;
            for (var j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return ans;
};
// @lc code=end
