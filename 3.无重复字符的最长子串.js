/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0, ans = 0
  let m = new Map
  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      left = Math.max(left, m.get(s[i]) + 1)
    }
    m.set(s[i], i)
    ans = Math.max(ans, i - left + 1)
  }
  return ans
};
// @lc code=end

lengthOfLongestSubstring("pwwkew")