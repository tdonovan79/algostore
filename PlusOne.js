// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
var plusOne = function(digits) {
    let currentDigit = digits.length - 1//set currentdigit to last digit
    digits[currentDigit]++//add 1
    while(digits[currentDigit] === 10){//if carry
        digits[currentDigit] = 0//set current digit to 0
        if(currentDigit === 0){//if front of array, unshift 1
            digits.unshift(1)
        }
        else{
            currentDigit--//else move down one digit and add carry
            digits[currentDigit]++
        }
    }
    return digits
};