/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split('').sort().join('');

    if (map.has(sortedWord)) {
      map.get(sortedWord).push(strs[i]);
    } else {
      map.set(sortedWord, [strs[i]]);
    }
  }

  return Array.from(map.values()).sort((a, b) => a.length - b.length);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
