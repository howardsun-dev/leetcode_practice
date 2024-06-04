/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Input: nums = [1,2,2,3,3,3], k = 2
 * Output: [2,3]
 */
// Function definition for finding the top K frequent elements in an array
const topKFrequent = (nums: number[], k: number): number[] => {
  // Create a map to store the frequency of each number in the input array
  const freqMap = new Map<number, number>();

  // Iterate over each number in the input array
  nums.forEach((num) => {
    // If the number is already in the map, increment its count; otherwise, set it to 1
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  // Convert the map entries into an array of [number, frequency] pairs
  const freqArray = Array.from(freqMap.entries());

  // Sort the array in descending order based on the frequency of each number
  freqArray.sort((a, b) => b[1] - a[1]);

  // Extract the top K elements based on their frequency
  let topKElements = freqArray.slice(0, k).map((pair) => pair[0]);

  // Sort the top K elements in ascending order
  topKElements.sort((a, b) => a - b);

  // Return the sorted list of top K frequent elements
  return topKElements;
};

const nums = [1, 2, 2, 3, 3, 3]; // Input array
const k = 2; // Number of top frequent elements to find
console.log(topKFrequent(nums, k)); // Call the function and log the result
