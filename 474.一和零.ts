/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (const str of strs) {
    const [zero, one] = count(str);
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

