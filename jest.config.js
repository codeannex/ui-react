module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>setupTests.js'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  roots: [
    '<rootDir>/__tests__/'
  ]
};
