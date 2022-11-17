/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const x = (nums[i] - 1) % n;
    nums[x] += n;
  }
  const ret = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
};
// @lc code=end

