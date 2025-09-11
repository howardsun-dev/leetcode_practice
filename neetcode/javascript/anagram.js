function isAnagram(s, t) {
  const map = new Map();

  if (s.length !== t.length) return false;

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }

  return true;
}

let s = 'racecar';
let t = 'carrace';

console.log(isAnagram(s, t));
