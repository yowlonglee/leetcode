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
  if (root === []) return true;
  return balanceChecker(root) === false ? false : true;
};

function balanceChecker(node) {
  if (node === null) return 0;

  let left = balanceChecker(node.left);
  let right = balanceChecker(node.right);
  // let val = node.val;
  // console.log({val, left, right});
  if (left === false || right === false) return false;
  return Math.abs(left - right) > 1 ? false : Math.max(left, right) + 1;
}

// @lc code=end

