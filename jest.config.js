module.exports = {
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        syntax: "ecmascript",
                        jsx: true,
                    },
                },
            },
        ],
    },
    testEnvironment: "jsdom", //adding jsdom for environement
};
