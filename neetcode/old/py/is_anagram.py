# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false;
# An anagram is a string that contains the exact same characeters as another string, but th eorder of the charactrs can be different

from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Count character in both strings
        counter_s = Counter(s)
        counter_t = Counter(t)

        # Compare retults
        return counter_s == counter_t


solution = Solution()

s = "racecar"
t = "carrace"

print(Counter(s))
print(Counter(t))
print(solution.isAnagram(s, t))
