// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const r = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const s = nums[i] + nums[left] + nums[right];
            if (s < 0) left += 1;
            else if (s > 0) right -= 1;
            else {
                r.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left += 1;
                while (left < right && nums[right] === nums[right - 1]) right -= 1;
                left += 1;
                right -= 1;
            }
        }
    }
    //for each i, set two pointers left and right and close in, skipping multiple characters. must sort first.
    return r;
};