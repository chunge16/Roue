// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,
    clearMocks: false,
    reporters: ["default",],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.main.tsx.json'
        },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/main/__mocks__/file-mock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/main/__mocks__/object-mock.js",
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ["<rootDir>main/setupTests.js"]
};