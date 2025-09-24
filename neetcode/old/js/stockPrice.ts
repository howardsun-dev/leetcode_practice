function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left += 1;
    }
    right += 1;
  }
  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
