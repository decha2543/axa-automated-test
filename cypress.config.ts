import { defineConfig } from 'cypress';
import * as path from 'node:path';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
	e2e: {
		setupNodeEvents(on) {
			on('file:preprocessor', webpackPreprocessor({
				webpackOptions: {
					resolve: {
						alias: {
							'@': path.resolve(__dirname, './cypress'),
						},
					},
				},
			}));
		},
	},
});