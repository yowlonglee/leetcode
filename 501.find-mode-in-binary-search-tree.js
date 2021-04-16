/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function(root) {
  // Create an empty hash map to store values and its occurrences
  const hash = {};
  // A queue for traversing the tree
  const queue = [];
  queue.push(root);
  // While traversing, we pick up the maxium number of occurrence of the nodes
  let max = 0;
  // Traverse the tree and create hash map
  while (queue.length > 0) {
    const current = queue.shift();
    hash[current.val] ? hash[current.val]++ : hash[current.val] = 1;
    max = Math.max(hash[current.val], max);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  // console.log(hash);
  
  // Create an empty array for pushing in mode values
  const result = [];
  // Search each entries in hash map, 
  // if the entry value matches the max occurrence number, push into result array.
  for (const [key, value] of Object.entries(hash)) {
    // console.log({key, value});
    if (value === max) result.push(key);
  }
  // console.log(result);
  return result;
};
// @lc code=end

