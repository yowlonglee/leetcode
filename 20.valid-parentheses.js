/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const open = '([{';
  const close = ')]}';
  const stack = [];
  for (char of s) {
    // If char is an open bracket, get the same type of close bracket and put into stack
    if (open.indexOf(char) >= 0) {
      stack.push(close.charAt(open.indexOf(char)));
    } else if (char === stack[stack.length - 1]) {
      // If char is a close bracket and is the same type in the stack's last item, remove the stack item
      stack.pop();
    } else {
      return false;
    }
  }
  // console.log(stack);
  return stack.length === 0;
};
// @lc code=end

