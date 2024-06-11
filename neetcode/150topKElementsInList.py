from typing import List, Dict

def top_k_elements(nums: List[int], k: int) -> List[int]:
    count: Dict[int, int] = {}
    freq: List[List[int]] = [[] for _ in range(len(nums) + 1)]

    for n in nums:
        count[n] = count.get(n, 0) + 1

    for n, c in count.items():
        freq[c].append(n)

    res: List[int] = []
    for i in range(len(freq) - 1, 0, -1):
        for n in freq[i]:
            res.append(n)
            if len(res) == k:
                return res

    return res

# Example usage
nums = [1, 2, 2, 3, 3, 3]
k = 2
print(top_k_elements(nums, k))