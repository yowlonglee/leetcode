/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = getPaths(root);
  const results = paths.map(path => {
    path.reverse();
    return path.join('->');
  });
  // console.log(results);
  return results;
};

function getPaths(node) {
  if (!node) return null;
  
  const left = getPaths(node.left);
  const right = getPaths(node.right);
  
  // Leaf node
  if (!left && !right) return [[node.val]];

  // Add current node value to left child paths
  if (left) {
    for (path of left) {
      path.push(node.val);
    }
  }
  // Add current node value to right child paths
  if (right) {
    for (path of right) {
      path.push(node.val);
    }
  }
  
  return [...(left ? left : []), ...(right ? right : [])];  
}

// @lc code=end

