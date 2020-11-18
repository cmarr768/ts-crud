module.exports = {
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFiles: ["reflect-metadata"],
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(test).ts?(x)"],
};
