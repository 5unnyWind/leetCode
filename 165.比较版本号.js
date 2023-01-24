/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const [v1, v2] = [version1.split('.'), version2.split('.')]
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
      const [k1, k2] = [+v1[i] || 0, +v2[i] || 0]
      if (k1 > k2) return 1
      if (k2 > k1) return -1
  }
  return 0
};
// @lc code=end

