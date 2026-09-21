/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     let result = nums.filter(value => value !== val);

    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return result.length;
    
};