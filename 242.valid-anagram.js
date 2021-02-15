/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s = s.normalize('NFC');
  t = t.normalize('NFC');
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) return false;
    t = t.replace(s[i], '');
  }
  return true;
};
// @lc code=end

