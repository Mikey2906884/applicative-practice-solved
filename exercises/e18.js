import { maxBy } from "../exercises/e17";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const yearCounts = asteroids.map((asteroid, i, array) => {
    return {
      year: asteroid.discoveryYear,
      count: array.filter(
        (element) => element.discoveryYear === asteroid.discoveryYear
      ).length,
    };
  });

  return maxBy(yearCounts, (count) => count.count).year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
