function isPalindrome(s: string): boolean {
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  console.log(cleanedString);

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] != cleanedString[right]) return false;
    left++;
    right--;
  }

  return true;
}

let s = 'Was it a car or a cat I saw?';
console.log(isPalindrome(s));
