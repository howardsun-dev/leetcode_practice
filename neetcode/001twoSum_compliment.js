/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const compMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (compMap.has(complement)) {
      return [compMap.get(complement), i];
    } else {
      compMap.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 3, 4], 6));
