/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const scoreMap = new Map();
  const sortedScore = score.sort((a, b) => b - a);
  console.log(sortedScore);

  for (let i = 0; i < sortedScore.length; i++) {
    if ()
  }

  for (let i = 0; i < score.length; i++) {
    scoreMap.set(score[i], i);
  }
  console.log(scoreMap);
};

score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score)); // Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
