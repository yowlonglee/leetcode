/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  // If the node has both children, return the shortest subpath, else follow the only path to the leaf.
  return (left && right) ? Math.min(left, right) + 1 : Math.max(left, right) + 1;
};

// @lc code=end

