// You are given two strings word 1 and word 2. Merge the strings by adding letters in
// alternating order, starting with word 1. If the string is longer than the other, append
// the additional letters onto the end of the merged string.

// Input: word1, word2 -- if one word is longer, append to the end after alternating
// Output: merged string that's alternated

function mergeAlternately(word1: string, word2: string): string {
  let i: number = 0;
  let j: number = 0;
  let result: string = '';

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }

    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;
}

const word1 = 'abc';
const word2 = 'pqr';

console.log(mergeAlternately(word1, word2));
