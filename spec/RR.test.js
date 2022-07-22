/* eslint-disable no-undef */
// import

const { getPercentageRecommended, averageToNearestTenth } = require('../client/src/components/Ratings');

const { testData } = require('./RRtestData');

// testData.results should be an array
test(
  `Should contain an array at testData.results`,
  () => {
    expect(Array.isArray(testData.results)).toBe(true);
  }
);


// getPercentageRecommended should
test(
  `Should return the percentage of users that recommend this product, rounded to the nearest tenth`,
  () => {
    expect(getPercentageRecommended(testData)).toBe(90);
  }
);


// averageToNearestTenth
test(
  `Should accept an array of values, take the average, and round to the nearest tenth`,
  () => {
    expect(averageToNearestTenth(testData)).toBe(!null);
  }
);

