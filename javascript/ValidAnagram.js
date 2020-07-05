// Given two strings s and t , write a function to determine if t is an anagram of s.
var isAnagram = function(s, t) {
    let sMap = new Map(), tMap = new Map()
    for(let i = 0 ; i < s.length ; i++){//create two maps of each string
        sMap[s[i]] = (sMap[s[i]] + 1 || 1)
        tMap[t[i]] = (tMap[t[i]] + 1 || 1)
    }
    console.log(sMap, tMap)
    for(let i = 0 ; i < s.length ; i++){//make sure char count the same
        if(sMap[s[i]] !== tMap[s[i]]){
            return false
        }
    }
    return s.length === t.length//make sure strings have same length
};