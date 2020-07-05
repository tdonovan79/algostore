// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2


// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
var subarraySum = function (nums, k) {
    let sumHash = {}, conSubs = 0, sum = 0//keep track of sums, continuous subarrays and the running sum
    sumHash[0] = 1 //if a difference evaluates to 0, it is a subarray as 0 to an element is a whole subarray
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]//increment running sum
        if (sumHash.hasOwnProperty(sum - k)) {//if sum-k seen before, array between sum and that adds to k
            conSubs += sumHash[sum - k]
        }
        sumHash[sum] = (sumHash[sum] + 1 || 1)//add sum to sum array if it exists, else 1
    }
    return conSubs
};