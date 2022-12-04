/*
 * @lc app=leetcode.cn id=1909 lang=cpp
 *
 * [1909] 删除一个元素使数组严格递增
 */

// @lc code=start
class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {
        int n = nums.size();
        int cnt = 0;
        for (int i = 1; i < n; i++) {
            if (nums[i] <= nums[i - 1]) {
                cnt++;
                if (cnt > 1) {
                    return false;
                }
                if (i > 1 && nums[i] <= nums[i - 2]) {
                    nums[i] = nums[i - 1];
                }
            }
        }
        return true;
    }
};
// @lc code=end

