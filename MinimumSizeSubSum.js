// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function(s, nums) {
    let slow = 0, sum = 0, minLength = Infinity//need a pointer, a sum and minlength store
    for (let i = 0; i < nums.length; i++) {//for a pointer up to find smallest amount
        sum += nums[i]//increment sum with value at i
        while (sum >= s) {//minimize window while sum or greater exists
            minLength = Math.min(minLength, i + 1 - slow)//see if this is the min sum
            sum -= nums[slow++]//move up slow pointer until sum is smaller than s
        }
    }
    return minLength === Infinity ? 0 : minLength//if sum never found or exceeded, return zero
};