module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', 
  ],
  plugins: ['security'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Reglas de seguridad activadas explícitamente (SAST)
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-unsafe-regex': 'error',

    // Reglas generales de calidad
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
  },
};
