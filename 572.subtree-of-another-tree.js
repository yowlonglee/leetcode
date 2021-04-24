/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(!s) return null;
  let equal = false;
  if (s.val === t.val) {
    equal = isEqual(s, t);
  }
  if (equal) return true;
  const left = isSubtree(s.left, t);
  const right = isSubtree(s.right, t);
  if (left || right) return true;
  return false;
};

// A function to check if two trees are equal
function isEqual(tree1, tree2) {
  if (!tree1 && tree2 || tree1 && !tree2) return false;
  if (!tree1 && !tree2) return true;
  if (tree1.val !== tree2.val) return false;
  const left = isEqual(tree1.left, tree2.left);
  const right = isEqual(tree1.right, tree2.right);
  if (left && right) return true;
  return false;
}

// @lc code=end

