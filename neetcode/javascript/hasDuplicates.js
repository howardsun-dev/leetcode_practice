function hasDuplicate(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      console.log(map);
      return true;
    } else {
      map.set(nums[i], 1);
    }
  }

  return false;
}

const numList = [1, 2, 3, 3];
console.log(hasDuplicate(numList));
