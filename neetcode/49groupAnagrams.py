from collections import defaultdict

def groupAnagrams(strs):
    anagrams = defaultdict(list)
    
    for word in strs:
        sorted_word = ''.join(sorted(word))
        anagrams[sorted_word].append(word)
    
    return sorted(anagrams.values(), key=len)

# Example usage
strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
print(groupAnagrams(strs))