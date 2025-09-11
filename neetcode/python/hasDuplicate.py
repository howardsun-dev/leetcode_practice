def has_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

num_list = [1,2,3,3,4]
print(has_duplicate(num_list))