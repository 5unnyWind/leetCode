/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const res: string[] = [];
  const dfs = (index: number, path: string) => {
    if (index === digits.length) {
      res.push(path);
      return;
    }
    const letters = map.get(digits[index]);
    for (const letter of letters) {
      dfs(index + 1, path + letter);
    }
  };
  dfs(0, "");
  return res;
};
// @lc code=end

