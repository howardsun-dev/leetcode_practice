# Given an array of strings str, group all anagrams together into sublists. You may return the output in any order

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different

from collections import defaultdict
from typing import List, Dict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = defaultdict(list)

        for word in strs:
            # print(word)
            sorted_word = ''.join(sorted(word))
            # print(sorted_word)
            anagram_groups[sorted_word].append(word)

        print(anagram_groups)
        return list(anagram_groups.values())
            

solution = Solution()

strs = ["act","pots","tops","cat","stop","hat"]

print(solution.groupAnagrams(strs))