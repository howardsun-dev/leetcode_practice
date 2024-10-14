# Given an array of integers num and an integer target, return the indices i and j such that
# nums[i] + nums[j] == target and i != j

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], i]
            num_dict[num] = i
        return None
    
solution = Solution()

nums = [3,4,5,6]
target = 7

print(solution.twoSum(nums, target))