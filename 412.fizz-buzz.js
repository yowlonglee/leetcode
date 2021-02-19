/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  // Create an empty array to save outputs
  const result = [];
  // Create a recursive function to print the output
  function print(i) {
    if (i > n) return;
    let item = '';
    if (i % 3 === 0) item += 'Fizz';
    if (i % 5 === 0) item += 'Buzz';
    if (!item) item = i.toString();
    result.push(item);
    i++;
    print(i);
  }
  // Start from 1
  print(1);
  return result;
};
// @lc code=end

