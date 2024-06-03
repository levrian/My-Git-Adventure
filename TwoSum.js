/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = {};
    for(i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(diff in seen){
            return [seen[diff],i]
        }else{
            seen[nums[i]] = i;
        }
    }
};