function groupAnagrams(strs: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};

  for (const word of strs) {
    const sortedWord = word.split('').sort().join('');
    console.log(sortedWord);

    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [];
    }
    anagrams[sortedWord].push(word);
  }

  return Object.values(anagrams).sort((a, b) => a.length - b.length);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
