/**
 *
 Verificar el factorial de un numero
 */

export function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  