/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  function search(node) {
    if (!node) return null;
    // Get longest path from both children
    const left = search(node.left);
    const right = search(node.right);
    // Update the diameter variable
    if (left + right > diameter) diameter = left + right;
    // Leaf node
    if (!left && !right) return 1;
    // Return the longest path of children to the parent
    return Math.max(left, right) + 1;
  }
  search(root);
  return diameter;
};

// @lc code=end

