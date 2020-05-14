module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // 关闭导入文件需提供文件类型后缀
    "import/extensions": [2, "never"],
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "import/prefer-default-export": 0,
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "max-len": [2, { "code": 120 }],
    "prettier/prettier": "error",
  },
};
