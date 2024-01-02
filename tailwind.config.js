/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Geist Mono', 'monospace'], // Asegúrate de usar el nombre correcto
			},
			// Añade pesos si no están incluidos por defecto
			fontWeight: {
				medium: 500,
				normal: 400,
			},
		},
	},
	plugins: [],
}
