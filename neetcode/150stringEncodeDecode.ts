/**
 * @param {string[]} strs
 * @returns {string}
 */

const encode = (strs: string[]): string => {
  let res = '';

  strs.map((str) => (res += str.length + '#' + str));
  console.log(res);

  return res;
};

/**
 * @param {string} str
 * @returns {string[]}
 */

const decode = (str: string): string[] => {
  let res: string[] = [],
    i = 0;

  while (i < str.length) {
    const j = str.indexOf('#', i);
    const len = parseInt(str.slice(i, j), 10);
    console.log(len);

    const nextStr = str.slice(j + 1, j + 1 + len);
    res.push(nextStr);

    i = j + 1 + len;

    console.log(res);
  }

  return res;
};

const input = ['neet', 'code', 'love', 'you'];
const encoded = encode(input);
console.log(encoded);
const decoded = decode(encoded);
console.log(decoded);
