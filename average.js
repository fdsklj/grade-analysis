function calculateAverage(data) {
  if (data.length === 0) return 0;
  let sum = 0;
  for (let student of data) {
    sum += student.score;
  }
  return sum / data.length;
}

module.exports = calculateAverage;