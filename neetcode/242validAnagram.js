/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charMap = new Map();

  // if (
  //   s.length <= 1 ||
  //   t.length <= 1 ||
  //   s.length > 5 * 10 ** 4 ||
  //   t.length > 5 * 10 ** 4
  // ) {
  //   return false;
  // }

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    charMap.set(sChar, (charMap.get(sChar) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    charMap.set(tChar, (charMap.get(tChar) ?? 0) - 1);
  }

  console.log(charMap);

  charMap.forEach((value, key) => {
    if (value === 0) {
      charMap.delete(key);
    }
  });

  console.log(charMap);

  if (charMap.size === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram('a', 'a'));
