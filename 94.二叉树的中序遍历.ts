/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      if (node.right) stack.push(node.right);
      stack.push(node);
      stack.push(null);
      if (node.left) stack.push(node.left);
    } else {
      result.push(stack.pop().val);
    }
  }
  return result;
}

// @lc code=end
