/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Input: nums = [1,2,2,3,3,3], k = 2
 * Output: [2,3]
 */

// * Bucket Sort Approach
const topKFrequent = (nums: number[], k: number): number[] => {
  const count: { [key: number]: number } = {};
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  for (const n in count) {
    freq[count[n]].push(parseInt(n));
  }

  const res: number[] = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
};

// * Sorting Approach (O (n log n)

// const topKFrequent = (nums: number[], k: number): number[] => {
//   // Create a map to store the frequency of each number in the input array
//   const freqMap = new Map<number, number>();

//   nums.forEach((num) => {
//     // If the number is already in the map, increment its count; otherwise, set it to 1
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   });

//   const freqArray = Array.from(freqMap.entries());

//   // Sort the array in descending order based on the frequency of each number
//   freqArray.sort((a, b) => b[1] - a[1]);

//   // Extract the top K elements based on their frequency
//   let topKElements = freqArray.slice(0, k).map((pair) => pair[0]);

//   // Sort the top K elements in ascending order
//   topKElements.sort((a, b) => a - b);

//   // Return the sorted list of top K frequent elements
//   return topKElements;
// };

const nums = [1, 2, 2, 3, 3, 3];
const k = 2;
console.log(topKFrequent(nums, k));
