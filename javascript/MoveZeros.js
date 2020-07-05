// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
var moveZeroes = function(nums) {
    let firstZero = 0, numFinder = 0//first zero points to first zero in array
    while(nums[firstZero] !== 0 && firstZero < nums.length){//find first zero
        firstZero++
    }
    numFinder = firstZero + 1//start looking for non-zero elements just in front of first zero
    while(numFinder < nums.length){
        if(nums[numFinder] !== 0){//if element is not zero, swap with first zero and increment both pointers
            nums[firstZero] = nums[numFinder]
            nums[numFinder] = 0
            firstZero++
            numFinder++
        }
        else{//else continue the search
            numFinder++
        }
    }
    return nums
};