function twoSum(nums: number[], target: number): number[] {
  const numToIndex = new Map();
  const resultsArray = [];

  console.log('test');
  console.log(nums);

  for (let num of nums) {
    let complement = target - num;
    console.log(complement);

    if (numToIndex.has(complement)) {
      resultsArray.push(nums.indexOf(complement));
      resultsArray.push(nums.indexOf(num));
    }

    numToIndex.set(num, nums.indexOf(num));
  }

  console.log(numToIndex);
  console.log(resultsArray);

  return resultsArray;
}

let nums = [4, 5, 6];
let target = 10;

console.log(twoSum(nums, target));
