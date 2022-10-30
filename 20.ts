/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const dic = {
    "(": ")",
    "[": "]",
    "{": "}",
    ".": ".",
  };
  const stack = ["."];
  for (let i of s) {
    if (i in dic) {
      stack.push(i);
    } else if (dic[stack.pop()!] !== i) return false;
  }
  return stack.length == 1;
}