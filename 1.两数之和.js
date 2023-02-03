/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let another = target - num;
        if (map.has(another)) {
            return [map.get(another), i];
        }
        map.set(num, i);
    }
};
// @lc code=end

