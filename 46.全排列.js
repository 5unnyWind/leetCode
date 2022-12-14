/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let len = nums.length;
  let used = new Array(len).fill(false);
  let dfs = (path) => {
    if (path.length === len) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
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


