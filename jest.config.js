const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: TEST_REGEX,
  transform: {
    // "^.+\\.tsx?$": "ts-jest",
    "^.+\\.tsx?$": "@swc/jest",
    // "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: ['node_modules', 'src']
}