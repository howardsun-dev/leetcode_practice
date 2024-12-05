function groupAnagrams(strs: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};

  for (const word of strs) {
    let sortedWord = word.split('').sort().join('');
    console.log(sortedWord);

    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [];
    }

    anagrams[sortedWord].push(word);
  }
  // console.log(anagrams);

  return Object.values(anagrams).sort((a, b) => a.length - b.length);
}

const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(words));
