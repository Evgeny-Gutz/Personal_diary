import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		rules: {
			'react/prop-types': [0], // выключает рекомендованый prop-types для проверки пропсов
			'indent': ['error', 'tab'], // чтобы по умолчанию были tabs (отступы)
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'never'],
			quotes: ['error', 'single'],
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
		}
	}
]);