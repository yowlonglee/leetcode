/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  function search(node, isLeftTree) {
    if (!node) return null;

    const left = search(node.left, true);
    const right = search(node.right, false);
    // const val = node.val;
    // console.log({val, left, right});
    
    if (left === null && right === null && isLeftTree) sum += node.val;
    return node.val;
  }
  search(root);
  return sum;
};
// @lc code=end

