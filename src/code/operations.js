const labelVectorMaker = n => {
  let vector = [];
  for (let i = 0; i<=n; i++) {
    vector.push(i);
  }
  return vector;
}
const sameDayBirthdayProCalc = n => {
  let ans = (1 - Math.pow(364/365,n))*100;
  return ans.toFixed(3)
}
const sameDayBirthdayDataVector = len => {
  let vector = [];
  for (let i = 0; i<=len; i++){
    vector.push(sameDayBirthdayProCalc(i));
  }
  return vector;
}
const twoSameDataVector = n => {
  let vector = [0, 0, 0.273, 0.820, 1.635, 2.713, 4.046, 5.623, 7.433, 9.462, 11.694,
  14.114, 16.702, 19.441, 22.310, 25.290, 28.360, 31.500, 34.691, 37.9118, 41.1438,
  44.368, 47.569, 50.7297, 53.8344, 56.869, 59.824, 62.685, 65.446, 68.096, 70.631, 73.0454,
  75.334, 77.497, 79.531, 81.438, 83.218, 84.873, 86.406, 87.821, 89.123, 90.3151, 91.403,
  92.39, 93.28, 94.09, 94.85, 95.47, 96.05, 96.57, 97.03, 97.44, 97.800, 98.113, 98.387, 98.6262,
  98.833, 99.012, 99.16, 99.29, 99.41, 99.50, 99.59, 99.66, 99.71, 99.76, 99.80, 99.84, 99.87,
  99.89, 99.9]
  return vector.slice(0,n)
}

const operations = {
  labelVectorMaker: labelVectorMaker,
  sameDayBirthdayProCalc: sameDayBirthdayProCalc,
  sameDayBirthdayDataVector: sameDayBirthdayDataVector,
  twoSameDataVector: twoSameDataVector
}

export { operations };