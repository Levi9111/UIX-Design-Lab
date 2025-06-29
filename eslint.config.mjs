// eslint.config.js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Use Next.js defaults (web vitals + TypeScript)
  ...compat.extends('next/core-web-vitals', 'next'),

  // Use Tailwind plugin correctly (not in plugins array)
  ...compat.extends('plugin:tailwindcss/recommended'),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: ['prettier'],
    rules: {
      // Code style
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'multi-line'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-template': 'error',
      'no-multi-spaces': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'consistent-return': 'error',

      // React & JSX
      'react/jsx-key': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/prop-types': 'off',

      // a11y
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/label-has-associated-control': 'error',

      // Prettier
      'prettier/prettier': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',

      // Import/order
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
];
