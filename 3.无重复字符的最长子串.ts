/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const dic = {};
  let res = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in dic) {
      left = Math.max(left, dic[s[i]] + 1);
    }
    dic[s[i]] = i;
    res = Math.max(res, i - left + 1);
  }
  return res;
};
// @lc code=end

