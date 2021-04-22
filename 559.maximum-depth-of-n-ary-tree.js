/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      const current = queue.shift();
      queue = [...queue, ...current.children];
      size--;
    }
    depth++;
  }
  return depth;
};

// @lc code=end

