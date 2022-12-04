/*
 * @lc app=leetcode.cn id=2344 lang=cpp
 *
 * [2344] 使数组可以被整除的最少删除次数
 */

// @lc code=start
class Solution {
public:
    int minOperations(vector<int>& nums, vector<int>& numsDivide) {
        int n = nums.size();
        int m = numsDivide.size();
        vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                dp[i][j] = dp[i - 1][j];
                if (nums[i - 1] % numsDivide[j - 1] == 0) {
                    dp[i][j] = max(dp[i][j], dp[i - 1][j - 1] + 1);
                }
            }
        }
        return n - dp[n][m];
    }
};
// @lc code=end

