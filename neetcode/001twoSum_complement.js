/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const compMap = new Map(); // Create a new map to store complements

  // Loop through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Get the complement

    if (compMap.has(complement)) {
      // Check if the complement is already in the map and return the indices is present in map
      return [compMap.get(complement), i];
    } else {
      compMap.set(nums[i], i); // If not in the map, set the complement with index
    }
  }
};
// Testing different cases
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 2, 4], 6));
