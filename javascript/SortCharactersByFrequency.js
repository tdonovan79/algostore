// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
var frequencySort = function (s) {
    let freqObj = {}//create hash to find 
    for (let i = 0; i < s.length; i++) {//for each char, update frequency in hash
        freqObj[s[i]] = (freqObj[s[i]] + 1 || 1)
    }
    let sortedChars = [], keys = Object.keys(freqObj)//get keysand array for bucket sort
    for (let i = 0; i < keys.length; i++) {//sort each char into array at array element with index of its frequency
        if (sortedChars[freqObj[keys[i]]]) {
            sortedChars[freqObj[keys[i]]].push(keys[i])
        }
        else {
            sortedChars[freqObj[keys[i]]] = [keys[i]]
        }

    }

    let stringArray = []//create array to build string
    for (let i = sortedChars.length - 1; i >= 0; i--) {//build array of string in correct order
        console.log(sortedChars[i])
        if (sortedChars[i]) {
            for (let k = 0; k < sortedChars[i].length; k++) {
                for (let j = 0; j < freqObj[sortedChars[i][k]]; j++) {
                    stringArray.push(sortedChars[i][k])
                }
            }
        }
    }
    let sortedString = stringArray.join("")//join into array
    return sortedString
};