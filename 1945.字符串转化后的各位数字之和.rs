/*
 * @lc app=leetcode.cn id=1945 lang=rust
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
impl Solution {
    pub fn get_lucky(s: String, k: i32) -> i32 {
        let mut sum = 0;
        for c in s.chars() {
            let mut num = c as i32 - 'a' as i32 + 1;
            while num > 0 {
                sum += num % 10;
                num /= 10;
            }
        }
        let mut k = k - 1;
        while k > 0 {
            let mut num = sum;
            sum = 0;
            while num > 0 {
                sum += num % 10;
                num /= 10;
            }
            k -= 1;
        }
        sum
    }
}
// @lc code=end

