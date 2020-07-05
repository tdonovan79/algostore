
// Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
    let charMap = {}
    let max = 0
    for(let i = 0, j = 0 ; j < s.length ; j++){//i begining of string, j end/searcher
        console.log(charMap, max)
        if (charMap.hasOwnProperty(s[j])){ //if char has been seen before, set i to current place
            i = Math.max(charMap[s[j]], i)
        }
        max = Math.max(max, j - i + 1)//max is diff between i an j or max
        charMap[s[j]] = j+1//update char position
    }
    return max
};