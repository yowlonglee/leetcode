/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // An empty tree is balanced
  if (!root) return true;
  // If we get false value on the root, means at least one of the subtree nodes is unbalanced.
  // We can say this tree is unbalanced.
  // Else we will get a true value of max tree depth. Then we can return true to say this is a balanced tree.
  return balanceChecker(root) === false ? false : true;
};

// A helper function to check subtrees in every node
// Returns false if its subtrees are unbalanced
// Else returns its maxium subtree depth
function balanceChecker(node) {
  // Start counting tree depth from leaf
  if (!node.left && !node.right) return 0;

  // Check depth of left and right subtrees
  let left = balanceChecker(node.left);
  let right = balanceChecker(node.right);
  // let val = node.val;
  // console.log({val, left, right});

  // If any subtree returns false value, pass the value to the root
  // We're not using !node for comparison because 0 is also a falsy value.
  if (left === false || right === false) return false;
  // Else we calculate the depth from both trees.
  // If the difference is greater than 1, means this is an unbalanced tree node.
  // Else we will pass the max subtree depth to the parent.
  return Math.abs(left - right) > 1 ? false : Math.max(left, right) + 1;
}

// @lc code=end

