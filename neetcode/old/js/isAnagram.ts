function countCharacters(str: string): Map<string, number> {
  const charMap = new Map<string, number>();

  for (let char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  return charMap;
}

// Usage
const s = 'racecar';
const t = 'carrace';

console.log(countCharacters(s));
console.log(countCharacters(t));

function compareMaps(
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean {
  return Array.from(map1.entries()).every(
    ([key, value]) =>
      map2.has(key) &&
      value === map2.get(key) &&
      Array.from(map2.entries()).every(
        ([k, v]) => map1.has(k) && v === map1.get(k)
      )
  );
}

interface Solution {
  isAnagram: (s: string, t: string) => boolean;
}

const solution: Solution = {
  isAnagram: function (s: string, t: string): boolean {
    return compareMaps(countCharacters(s), countCharacters(t));
  },
};

console.log(solution.isAnagram(s, t));
