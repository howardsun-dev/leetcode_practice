# Given an integer arrary nums, return true if any value appear more than once in the array, otherwise return false

from typing import List


class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False


# Create an instance of the solution class
solution = Solution()

# Test the function with inputs
nums1 = [1, 2, 3, 3]
nums2 = [1, 2, 3, 4]

print(solution.hasDuplicate(nums1))
print(solution.hasDuplicate(nums2))
