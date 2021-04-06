/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let h = height(root);
  const result = [];
  let depth = 1;
  for (depth; depth <= h; depth++) {
    console.log(depth);
    result.push(levelOrder(root, depth));
  }

  
};
function levelOrder(node, d, level = []) {
  if (node) console.log(node.val, d);
  if (!node) return level;
  if (d === 1) level.push(node.val);
  if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}

function height(node) {
  if (!node) return 0;
  let left = height(node.left);
  let right = height(node.right);
  return Math.max(left, right) + 1;
}

function getBottomValues(node) {
  const bottomValues = [];
  if (node.left) {
    getBottomValues(node.left);
    bottomValues.push(node.left.val);
  };
  if (node.right) {
    getBottomValues(node.right);
    bottomValues.push(node.right.val);
  }
  return bottomValues;
}


function getSubtreeValue(node) {
  if (!node.left && !node.right) return node.val;
  const left = node.left ? getSubtreeValue(node.left) : null;
  const right = node.right ? getSubtreeValue(node.right) : null;
  return [left, right];
}
// @lc code=end

