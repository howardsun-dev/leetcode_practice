from typing import List

class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        return min(nums, key=lambda x: (abs(x), -x))
    

solution = Solution()

test = [-4,-2,1,4,8]

print(solution.findClosestNumber(test))