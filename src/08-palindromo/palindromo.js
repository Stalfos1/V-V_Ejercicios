/**
 *
 * Escriba un programa que verifica si una cadena de texto es un palíndromo.
 * Un palíndromo es una palabra, frase, número u otra secuencia de caracteres
 * que se lee igual hacia adelante que hacia atrás.
 */
export function esPalindromo(cadena) {
	const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();

	return cadenaSinEspacios === cadenaSinEspacios.split('').reverse().join('');
}
