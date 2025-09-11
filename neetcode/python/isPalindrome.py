def isPalindrome(s: str) -> bool:
    cleaned_s = "".join(char for char in s if char.isalnum()).lower()
    left, right = 0, len(cleaned_s) - 1

    while left < right:
        if cleaned_s[left] != cleaned_s[right]:
            return False
        left += 1
        right -= 1

    return True


s = "Was it a car or a cat I saw?"
print(isPalindrome(s))
