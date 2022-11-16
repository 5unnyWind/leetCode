/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  const result = [0];
  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
};
// @lc code=end

