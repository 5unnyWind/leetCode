/*
 * @lc app=leetcode.cn id=1906 lang=typescript
 *
 * [1906] 查询差绝对值的最小值
 */

// @lc code=start
function minDifference(nums: number[], queries: number[][]): number[] {
    const n = nums.length;
    const m = queries.length;
    const preSum = new Array(n + 1).fill(0).map(() => new Array(101).fill(0));
    for (let i = 1; i <= n; i++) {
        preSum[i] = preSum[i - 1].slice();
        preSum[i][nums[i - 1]]++;
    }
    const ans = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        const [left, right] = queries[i];
        let min = Infinity;
        let last = -1;
        for (let j = 1; j <= 100; j++) {
            if (preSum[right + 1][j] - preSum[left][j] > 0) {
                if (last !== -1) {
                    min = Math.min(min, j - last);
                }
                last = j;
            }
        }
        ans[i] = min === Infinity ? -1 : min;
    }
    return ans;
};
// @lc code=end

