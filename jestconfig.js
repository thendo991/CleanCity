module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src', '<rootDir>/src/tests'], // Adjust to your real test folder
    testMatch: [
      '**/__tests__/**/*.+(js|jsx|ts|tsx)',
      '**/?(*.)+(spec|test).+(js|jsx|ts|tsx)'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  