class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        # i = 0
        # j = 0
        # result = ''

        # while i < len(word1) and j < len(word2):
        #     result += word1[i] + word2[j]
        #     i += 1
        #     j += 1

        # while i < len(word1):
        #     result += word1[i]
        #     i += 1

        # while j < len(word2):
        #     result += word2[j]
        #     j += 1
        
        # return result

        min_len = min(len(word1), len(word2))
        return ''.join(word1[:min_len] + word2[:min_len]) + \
               word1[min_len:] + word2[min_len:]

solution = Solution()

rword1 = 'abc';
rword2 = 'pqrtest';

print(solution.mergeAlternately(rword1, rword2))
