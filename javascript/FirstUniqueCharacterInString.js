// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.
var firstUniqChar = function(s) {
    let charHash = {}//store count of each character
    for(let i = 0 ; i < s.length ; i++){//iterate through string and get count
        charHash[s[i]] = (charHash[s[i]] + 1 || 1)
    }
    for(let i = 0 ; i < s.length ; i++){//iterate again and return index if count is 1
        if(charHash[s[i]] === 1){
            return i
        }
    }
    return -1
};