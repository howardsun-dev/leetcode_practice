function findClosestNumber(nums: number[]): number {
  let closest = nums[0];

  for (let num of nums) {
    const currDist = Math.abs(0 - num);

    if (
      currDist < Math.abs(closest) ||
      (currDist === Math.abs(closest) && num > closest)
    ) {
      closest = num;
    }
  }

  return closest;
}

const cases = [-4, -2, 1, 4, 8];
console.log(findClosestNumber(cases));
