// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2) // mid always l + r - l /. 2
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] >= nums[left]){//if midpoint is greater than left, this part of array is sorted ish, pivot to the right
            if(target >= nums[left] && target < nums[mid]){//if target lies between let and mid, move right over
                right = mid - 1
            }
            else{//else, it is on right side, move left over
                left = mid + 1
            }
        }
        else {//else, caught in rotation
            if(target <= nums[right] && target > nums[mid]){// this part of array is sorted, pivot to the left. if target is between mid and right, search there, move left over
                left = mid + 1
            }
            else {//otherwise it is on other side, move right over
                right = mid - 1
            }
        }
    }
    return -1
};