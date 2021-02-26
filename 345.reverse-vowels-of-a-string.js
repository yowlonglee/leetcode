/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const regex = /[aeiouAEIOU]/g;
  // console.log(s.match(regex));
  const vowels = s.match(regex);
  if (!vowels) return s;
  // console.log(vowels);
  const letters = s.split('');
  const vowelString = 'aeiouAEIOU';
  for (let i = 0; i < letters.length; i += 1) {
    if (vowelString.indexOf(letters[i]) >= 0) letters[i] = vowels.pop();
    if (vowels.length === 0) break;
  }
  // console.log(letters);
  return letters.join('');
};
// @lc code=end

