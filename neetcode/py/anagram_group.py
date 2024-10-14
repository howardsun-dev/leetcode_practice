# Given an array of strings str, group all anagrams together into sublists. You may return the output in any order

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different

from collections import defaultdict
from typing import List, Dict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        

solution = Solution()

strs = ["act","pots","tops","cat","stop","hat"]