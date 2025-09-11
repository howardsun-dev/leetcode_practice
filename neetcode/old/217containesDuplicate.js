/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], (numMap.get(nums[i]) ?? 0) + 1);

    const current = numMap.get(nums[i]);

    if (current > 1) {
      return true;
    }
  }

  return false;
};

const numArray = [1, 2, 3, 1];
console.log(containsDuplicate(numArray));
