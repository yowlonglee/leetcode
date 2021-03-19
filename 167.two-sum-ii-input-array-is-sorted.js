/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  }  
};
// @lc code=end

