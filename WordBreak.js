// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
var wordBreak = function(s, wordDict) {
    let dictMap = new Map()
    for(let i = 0 ; i < wordDict.length ; i++){//create map of all words
        dictMap[wordDict[i]] = wordDict[i]
    }
    let dp = new Array(s.length + 1).fill(false)//create new array storing whether 0 - index is valid
    dp[0] = true
    for(let i = 1 ; i <= s.length ; i++){//iterate for al words up to index i
        for(let j = 0 ; j < i ; j++){
            if(dp[j] && dictMap.hasOwnProperty(s.substring(j, i))){//if valid from 0 to j and then j to i is in dict, mark dp as true
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]//return whether final array entry is true
};