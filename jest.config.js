/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMocks.js',
    'react-native-safe-area-context': '<rootDir>/__mocks__/safeArea.js',
    moti: '<rootDir>/__mocks__/moti.ts',
  },
  globals: {
    'jest-expo': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
};
