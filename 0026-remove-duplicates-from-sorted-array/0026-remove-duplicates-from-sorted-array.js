/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = nums.filter((value,index)=>{
      return  index === 0 || value !== nums [index-1]
    })

    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return result.length;
};
    
