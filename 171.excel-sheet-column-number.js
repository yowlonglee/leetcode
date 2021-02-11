/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function getAlphabetPosition(x) {
    return alphabets.indexOf(x) + 1;
  }
  const arr = [...s].reverse();
  const result = arr.reduce((acc, item, i) => {
    // console.log({acc, item, i});
    const pos = getAlphabetPosition(item);
    const num = (i === 0) ? pos : acc + (Math.pow(26, i) * pos);
    return num;
  }, 0);
  // console.log(result);
  return result;
};
// @lc code=end

