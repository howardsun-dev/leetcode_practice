from collections import defaultdict
from typing import List, Dict

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams: Dict[str, List[str]] = defaultdict(list)
    
    for word in strs:
        sorted_word = ''.join(sorted(word))
        anagrams[sorted_word].append(word)
    
    return sorted(anagrams.values(), key=len)

strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
print(groupAnagrams(strs))