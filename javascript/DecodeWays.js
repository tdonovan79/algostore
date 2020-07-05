// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

var numDecodings = function(s) {//straightforward problem, but 0s need to be accounted for as edge casesas they do not map to a number but are part of other numbers
    if(!s.length){return 0}//if string empty return zero
    let dp = new Array(s.length + 1).fill(0)//dp array is one space "ahead" of s index
    dp[0] = 1//there is at least one way to make string
    if(s[0] !== "0"){//if first char is not zero, it is legitimate number
        dp[1] = 1
    }
    for(let i = 2 ; i < dp.length ; i++){
        if(s[i -1] !== "0"){//if num i (i-1 in string) is tracking is not zero, then current position equals last position
            dp[i] += dp[i -1]
        }
        let twoInt = parseInt(s[i - 2] + s[i - 1])
        if(twoInt < 27 && twoInt > 9){//if two digits also make another number, than legitmate and addall results from two steps away
            dp[i] += dp[i-2]
        }
    }
    return dp[dp.length - 1]//final entry in dp array holds final value
};