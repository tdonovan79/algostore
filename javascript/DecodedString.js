// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
var decodeString = function(s) {
    let currentSub = "", currentNum = 0, numStack = [], subStack = [], outputString = ""
    for(let i = 0 ; i < s.length ; i++){//iterate through string
        if(isNum(s[i])){//if char is a number
            if(currentSub.length && !numStack.length){//if there are prev chars and no nums on stack, add to output string
                outputString += currentSub
                currentSub = ""
            }
            currentNum = (currentNum * 10) + parseInt(s[i])//add num to currentNum, *10 incase multi digit
        }
        else if(s[i] === '['){//if [
            numStack.push(currentNum)//push current num onto stack
            currentNum = 0
            subStack.push(currentSub)//push current string onto stack
            currentSub = ""
        }
        else if(s[i] === ']'){//if ]
            currentNum = numStack.pop()//get last num on stack
            currentSub = currentSub.repeat(currentNum)//repeat current substring num times
            if(!numStack.length){//if numstack empty, add to output string, current bracket series over
                outputString += currentSub
                currentSub = ""
                currentNum = 0
            }
            else {//else add repeated string to next string in stack, as whole string is repeated
                currentSub = subStack.pop() + currentSub
                currentNum = 0
            }
        }
        else{//else if char, append to current working string
            currentSub += s[i]
        }
    }
    if(currentSub.length){//append any loose chars at the end
        outputString += currentSub
    }
    return outputString
};
let isNum = function(char){//check if char is a number
    if(parseInt(char) <=9 && parseInt(char) >= 0){
        return true
    }
}