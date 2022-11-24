/*
 * @lc app=leetcode.cn id=526 lang=cpp
 *
 * [526] 优美的排列
 */

// @lc code=start
class Solution {
public:
    int countArrangement(int n) {
        vector<int> nums(n);
        for (int i = 0; i < n; ++i) {
            nums[i] = i + 1;
        }
        int ans = 0;
        function<void(int)> dfs = [&](int idx) {
            if (idx == n) {
                ++ans;
                return;
            }
            for (int i = idx; i < n; ++i) {
                swap(nums[idx], nums[i]);
                if (nums[idx] % (idx + 1) == 0 || (idx + 1) % nums[idx] == 0) {
                    dfs(idx + 1);
                }
                swap(nums[idx], nums[i]);
            }
        };
        dfs(0);
        return ans;
    }
};
// @lc code=end

