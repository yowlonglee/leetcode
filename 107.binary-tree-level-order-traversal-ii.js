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
  // Return an empty array if tree is empty.
  if (!root) return [];
  // Create an empty array for the final result.
  const results = [];
  // We will use a queue concept to get node values from a tree level.
  // While removing a node from the queue, we're also adding its children to the queue.
  const queue = [];
  // First add root to the queue.
  queue.push(root);
  
  while (queue.length > 0) {
    // In the beginning of each level iteration, create an empty array for node values on this level.
    const level = [];
    // The levelLength variable is the number of nodes on current tree level.
    // We will update it at the beginning of each level iteration and iterate this many times.
    // So we're not affected by the new nodes adding into queue if we just rely on queue length.
    let levelLength = queue.length;

    // Iterate the nodes that are on the same level.
    while (levelLength > 0) {
      // Remove the first node from queue.
      const currentNode = queue.shift();
      // Push the current node value into the level array.
      level.push(currentNode.val);
      // Push children nodes into queue if available.
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      // Subtract 1 from levelLength.
      levelLength--;
    }
    // At the end of each level iteration, 
    // we'll push the level array which contains all node values from this level to the results array.
    results.push(level);
    }

  // Return the reversed result array as the problem is asking for a bottom-up level order.
  return results.reverse();
};
// @lc code=end

