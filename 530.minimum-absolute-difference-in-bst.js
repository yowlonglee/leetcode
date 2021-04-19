/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function(root) {
  // Flatten the tree with in-order traversal method so we will get a sorted array form min to max with all node values
  const output = sorting(root);
  // console.log(output);
  let min = Infinity;
  for (let i = 1; i < output.length; i++) {
    min = Math.min(min, output[i] - output[i - 1]);
  }
  return min;
};

function sorting(node, output = []) {
  // Do nothing with empty nodes
  if (!node) return;

  // Sort left tree first
  sorting(node.left, output);
  // Then add current node value to output array
  output.push(node.val);
  // Continue to sort right tree
  sorting(node.right, output);
  return output;
}
// @lc code=end

