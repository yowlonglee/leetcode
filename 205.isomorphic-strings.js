/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  // Make a hash table
  
  const hash = {};
  for (let i = 0; i < s.length; i += 1) {
    // If char is not in hash, add it in
    if(!Object.keys(hash).includes(s[i]) && !Object.values(hash).includes(t[i])) hash[s[i]] = t[i];
    if(hash[s[i]] !== t[i]) return false;
  }
  return true;
};
// @lc code=end

