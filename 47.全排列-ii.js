/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let len = nums.length;
  let used = new Array(len).fill(false);
  nums.sort((a, b) => a - b);
  let dfs = (path) => {
    if (path.length === len) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);
  return res;
};
// @lc code=end

permuteUnique([1, 1, 2])