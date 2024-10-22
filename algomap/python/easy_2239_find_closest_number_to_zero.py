from typing import List

class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        closest = abs(nums[0])
        # print(closest)

        for num in nums:
            # print(num)
            curr_dist = abs(0 - num)

            if (
               curr_dist < abs(closest) or
               (curr_dist == abs(closest) and num > closest)
               ):
                closest = num

        return closest
    
solution = Solution()

test = [-4,-2,1,4,8]

print(solution.findClosestNumber(test))