/*
 * @lc app=leetcode.cn id=2391 lang=javascript
 *
 * [2391] 收集垃圾的最少总时间
 */

// @lc code=start
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  const n = garbage.length;
  const m = garbage[0].length;
  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  const queue = [];
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (garbage[i][j] === '1') {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
    res += travel[0];
  }
  return res;
};
// @lc code=end

