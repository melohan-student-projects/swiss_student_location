let module;
module.exports = {
    testMatch: ['**/tests/**/*.test.(ts|tsx|js)', '**/integration-tests/**/*.test.(ts|tsx|js)'],
    preset: 'vite-ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    },
};
