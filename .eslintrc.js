
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        node: true,
        es2020: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        camelcase: "off",
        "@typescript-eslint/explicit-function-return-type": [
            1,
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
            },
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variableLike",
                format: ["camelCase"],
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: "enumMember",
                format: ["PascalCase"],
            },
            {
                // enums must be singular
                selector: "enum",
                format: ["PascalCase"],
                custom: {
                    regex: "s$",
                    match: false,
                },
            },
        ],
        "@typescript-eslint/no-empty-interface": [
            1,
            {
                allowSingleExtends: true,
            },
        ],
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    },
};