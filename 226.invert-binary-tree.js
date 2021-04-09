/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  let level = [];
  let children = [];
  let nextLevel = [];
  level.push(root);
  
  while (level.length > 0) {
    // Push all children into children array
    for (let i = 0; i < level.length; i++) {
      if(level[i].left) {
        children.push(level[i].left);
        nextLevel.push(level[i].left);
      } else {
        children.push(null);
      } 
      if(level[i].right) {
        children.push(level[i].right);
        nextLevel.push(level[i].right);
      } else {
        children.push(null);
      } 
    }
    while (level.length > 0) {
      const current = level.pop();
      if (current) {
        current.left = children.pop();
        current.right = children.pop();
      }
    }
    level = nextLevel;
    nextLevel = [];
  }
  return root;
};
// @lc code=end

