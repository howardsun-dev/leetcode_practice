from typing import List
from collections import Counter

def top_k_elements(nums: List[int], k: int) -> List[int]:
    """
    :param nums: List[int]
    :param k: int
    :return: List[int]
    """

    # Create freq dictionary
    freq_dict = Counter(nums)

    # Convert dict to list of of (number, frequency) pairs
    freq_list = list(freq_dict.items())