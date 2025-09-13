function twoSum(nums: number[], target: number) {
  const numberList: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (Object.hasOwn(numberList, complement)) {
      return [numberList[complement], i];
    }

    numberList[nums[i]] = i;
  }
}

let numsList = [4, 5, 6];
let tgt = 10;

console.log(twoSum(numsList, tgt));

/*   const numToIndex = new Map();
  const resultsArray = [];

  for (let num of nums) {
    let complement = target - num;

    if (numToIndex.has(complement)) {
      resultsArray.push(nums.indexOf(complement));
      resultsArray.push(nums.indexOf(num));
    }

    numToIndex.set(num, nums.indexOf(num));
  }

  return resultsArray; */
