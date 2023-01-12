/*
 * @lc app=leetcode.cn id=2003 lang=javascript
 *
 * [2003] 每棵子树内缺失的最小基因值
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function(parents, nums) {
  const n = parents.length;
  const children = new Array(n).fill(0).map(() => []);
  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }
  const ans = new Array(n).fill(0);
  const seen = new Set();
  const dfs = (u) => {
    seen.add(nums[u]);
    for (const v of children[u]) {
      dfs(v);
    }
    while (seen.has(ans[u])) {
      ans[u]++;
    }
  };
  dfs(0);
  return ans;
};
// @lc code=end

