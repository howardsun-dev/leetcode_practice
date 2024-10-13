// function twoSum(nums, target) {
//   const numList = {};

//   for (let i = 0; i < nums.length; i++) {
//     let compliment = target - nums[i];

//     if (Object.hasOwn(numList, compliment)) {
//       return [numList[compliment], i];
//     }

//     numList[nums[i]] = i;
//   }
//   return false;
// }

// let nums = [3, 4, 5, 6];
// let target = 7;

function twoSum(nums, target) {
  const numList = new Map();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    console.log(compliment);

    if (numList.has(compliment)) {
      return [numList.get(compliment), i];
    }

    numList.set(nums[i], i);
  }
  return false;
}

let nums = [3, 4, 5, 6];
let target = 11;

console.log(twoSum(nums, target));
