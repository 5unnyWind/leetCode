/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  function preorderTraversal(node){
    if(!node) return [null]
    return [node.val,...preorderTraversal(node.left),...preorderTraversal(node.right)]
  }
  function postorderTraversal(node){
    if(!node) return [null]
    return [node.val,...postorderTraversal(node.right),...postorderTraversal(node.left)]
  }
  return preorderTraversal(root).toString() === postorderTraversal(root).toString()
};
// @lc code=end

