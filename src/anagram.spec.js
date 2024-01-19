// anagram.spec.js
const areAnagrams = require('./anagram');

describe('Anagram Detection', () => {
  it('should return true for anagrams', () => {
    expect(areAnagrams('Listen', 'Silent')).toBe(true);
    expect(areAnagrams('The Morse Code', 'Here come dots')).toBe(true);
    expect(areAnagrams('Hello', 'elloH')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(areAnagrams('World', 'Hello')).toBe(false);
    expect(areAnagrams('OpenAI', 'OpenAPI')).toBe(false);
    expect(areAnagrams('Test', 'Test')).toBe(false); // Igualdad no es anagrama
  });

  it('should handle different letter cases', () => {
    expect(areAnagrams('Listen', 'silent')).toBe(true);
    expect(areAnagrams('Debit card', 'Bad credit')).toBe(true);
  });

  it('should handle spaces and special characters', () => {
    expect(areAnagrams('Astronomer', 'Moon starer')).toBe(true);
    expect(areAnagrams('Madam Curie', 'Radium came')).toBe(true);
  });

  it('should return false for identical words', () => {
    expect(areAnagrams('Same', 'Same')).toBe(false);
  });
});