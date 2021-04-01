/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  // If this is an empty tree, it's a symmetric tree
  if (!root) return true;
  
  // Make a function to check if two nodes are symmetry
  function symmetryChecker(left, right) {
    // If both nodes are null, it's symmetry
    if (!left && !right) return true;
    // If only one of them is null, it's not symmetry
    if (!left || !right) return false;
    // The node values have to be equal
    if (left.val !== right.val) return false;

    // Recursivly check children nodes in a mirrored order
    return (
      symmetryChecker(left.left, right.right)
      && symmetryChecker(left.right, right.left)
    )
  }

  return symmetryChecker(root.left, root.right);
};
// @lc code=end

