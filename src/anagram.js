// anagram.js
function areAnagrams(word1, word2) {
    // Eliminamos espacios y convertimos a minúsculas para comparación sin distinción de mayúsculas
    const cleanedWord1 = word1.replace(/\s/g, '').toLowerCase();
    const cleanedWord2 = word2.replace(/\s/g, '').toLowerCase();
  
    // Convertimos las palabras a arrays de caracteres, los ordenamos y los comparamos
    const sortedWord1 = cleanedWord1.split('').sort().join('');
    const sortedWord2 = cleanedWord2.split('').sort().join('');
  
    // Verificamos si las palabras ordenadas son iguales
    return sortedWord1 === sortedWord2 && cleanedWord1 !== cleanedWord2;
  }
  
  module.exports = areAnagrams;