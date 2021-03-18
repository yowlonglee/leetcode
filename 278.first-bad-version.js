/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let max = n, min = 1;

        while(max - min > 1) {
            let median = Math.floor((max - min) / 2) + min;
            isBadVersion(median) ? max = median : min = median;
        }
        return isBadVersion(min) ? min : max;
    };
};
// @lc code=end

