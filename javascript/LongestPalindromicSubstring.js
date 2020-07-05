// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
var longestPalindrome = function(s) {
    if(s.length === 1 || s.length === 0){//if string is empty or one character return itself
        return s
    }
    let longLeft = 0, longRight = 0//init
    for(let i = 0 ; i < s.length ; i++){//check each in string
        let left = i, right = i + 1//init for "empty palindrome center"
        while (s[left] === s[right] && left >= 0 && right < s.length){//while l and r are equal, expand scope
            left--
            right++
        }
        if(right - left > longRight - longLeft){//if substring longest, set as new longest
            longLeft = left, longRight = right
        }
        left = i, right = i+2//init for "one char" palindrome center
        while (s[left] === s[right] && left >= 0 && right < s.length){
            left--//while l and r equal expand scope
            right++
        }
        if(right - left > longRight - longLeft){//if substring longest, set as new longest
            longLeft = left, longRight = right
        }
    }
    return s.substring(longLeft + 1, longRight)
};