// Función para determinar si un número es divisible por 7
const isDivisibleBySeven = number => number % 7 === 0;

// Función para determinar si un número contiene el dígito 7
const containsSeven = number => String(number).includes('7');

// Función principal del juego "Lucky Seven"
export const luckySevenGame = number => {
  if (isDivisibleBySeven(number)) {
    return 'Lucky';
  } else if (containsSeven(number)) {
    return 'Seven';
  } else {
    return String(number);
  }
};
