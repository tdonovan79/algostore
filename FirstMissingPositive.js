// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

var firstMissingPositive = function(nums) {
    //missing number must be between 1 and nums.length + 1 as anything else could not fit in array without pushing out a smaller number
    if(!nums.length){//if empty array, smallest number is 1
        return 1
    }
    if(nums.length == 1 && nums[0] === 1){//if array length is one and only one is in array, smallest number is 1
        return 2
    }
    let oneCheck = false
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === 1){//check to make sure 1 is present, otherwise answer is 1
            oneCheck = true
        }
        if(nums[i] > nums.length || nums[i] <= 0){//if larger than array length, 0 or negative change to 1
            nums[i] = 1
        }
    }
    if(!oneCheck){
        return 1
    }
    for(let i = 0 ; i < nums.length ; i++){//set index of num(now all between num and array.length) to negative if the number is present. use array[0] for array.length
        if(nums[Math.abs(nums[i])] > 0){
            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
        }
        if(Math.abs(nums[i]) === nums.length){
            if(nums[0] > 0){
                nums[0] = -nums[0]
            }
        }
    }
    for(let i = 1 ; i < nums.length ; i++){//return first number that is positive
        if(nums[i] > 0){
            return i
        }
    }
    if(nums[0] > 0){//check 0 index last
        return nums.length
    }
    return nums.length + 1//otherwise, smallest number is array length + 1