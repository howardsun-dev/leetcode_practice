/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b); // Make sure array is sorted
  let left = 0; // Init left pointer
  let right = sortedNums.length - 1; // Init right pointer
  console.log(sortedNums);

  while (left < right) {
    let sum = sortedNums[left] + sortedNums[right]; // Calculate sum of current pair

    if (sum === target) {
      // If the sum is equal to the target, return indices  (1-indexed)
      return [left, right];
    } else if (sum < target) {
      // If the sum is less than the target, increment left pointer
      left++;
    } else {
      // If the sum is greater than the target, decrement right pointer
      right--;
    }
  }

  // If no pair is found that sum up to the target, return message
  return false;
};

console.log(twoSum([2, 3, 4], 6));
