/*
 * @lc app=leetcode.cn id=982 lang=cpp
 *
 * [982] 按位与为零的三元组
 */

// @lc code=start
class Solution {
public:
    int countTriplets(vector<int>& nums) {
        int n = nums.size();
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j; k < n; k++) {
                    if ((nums[i] & nums[j] & nums[k]) == 0) {
                        ans++;
                    }
                }
            }
        }
        return ans;
    }
};
// @lc code=end

