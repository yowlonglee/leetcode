/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
var findTilt = function(root) {
  // We'll use this global object to collect tilt values as we search in the tree
  const tilt = { val: 0 };
  search(root, tilt);
  return tilt.val;
};

function search(node, tilt) {
  // A null node
  if (!node) return 0;
  // Search in the left and right subtrees
  const left = search(node.left, tilt);
  const right = search(node.right, tilt);

  // A leaf node, return the node value so its parent can calculate the tilt value
  if (!left && !right) return node.val;
  // Calculate the tilt value of current node, update in the global object
  tilt.val += Math.abs(left - right);
  // Return the node value sum of this subtree to the parent
  return node.val + left + right;
}
// @lc code=end

