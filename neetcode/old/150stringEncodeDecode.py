from typing import List


def encode(strs: List[str]) -> str:
    res = ""
    for s in strs:
        res += str(len(s)) + "#" + s
    return res


def decode(str: str) -> List[str]:
    res = []
    i = 0

    while i < len(str):
        j = str.index("#", i)
        length = int(str[i:j])
        next_str = str[j + 1 : j + 1 + length]
        res.append(next_str)
        i = j + 1 + length
    return res


input_strs = ["I", "code", "for", "fun"]
encoded = encode(input_strs)
print(encoded)
decoded = decode(encoded)
print(decoded)
