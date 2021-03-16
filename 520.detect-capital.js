/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const regex = /^([A-Z]|[a-z])((?<=[A-Z])[A-Z]*|[a-z]*)$/g;
  return regex.test(word);
};
// @lc code=end

