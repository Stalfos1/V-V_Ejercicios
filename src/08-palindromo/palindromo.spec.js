import { esPalindromo } from './palindromo';

describe('Palíndromo', () => {
	it('verifica si una palabra es un palíndromo', () => {
		expect(esPalindromo('reconocer')).toBe(true);
	});

	it('verifica si una frase es un palíndromo', () => {
		expect(esPalindromo('Anita lava la tina')).toBe(true);
		expect(esPalindromo('Ají traga lagartíja')).toBe(true);
	});

	it('verifica si una palabra no es un palíndromo', () => {
		expect(esPalindromo('Aguacate')).toBe(false);
	});

	it('verifica si una frase no es un palíndromo', () => {
		expect(esPalindromo('No todos los palíndromos son iguales')).toBe(false);
	});

	it('verifica si una cadena vacía es un palíndromo', () => {
		expect(esPalindromo('')).toBe(true);
	});
});
