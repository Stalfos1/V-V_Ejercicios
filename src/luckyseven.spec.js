import { luckySevenGame } from './luckyseven';

describe('Lucky Seven game', () => {
  it('should return number as a string if not divisible by 7 and does not contain 7', () => {
    expect(luckySevenGame(2)).toBe('2');
    expect(luckySevenGame(4)).toBe('4');
  });

  it('should return "Lucky" if number is divisible by 7', () => {
    expect(luckySevenGame(7)).toBe('Lucky');
    expect(luckySevenGame(14)).toBe('Lucky');
  });

  it('should return "Seven" if number contains the digit 7', () => {
    expect(luckySevenGame(17)).toBe('Seven');
    expect(luckySevenGame(27)).toBe('Seven');
    expect(luckySevenGame(71)).toBe('Seven');
  });

  it('should return "Lucky" if number is divisible by 7 and "Seven" if it contains the digit 7', () => {
    expect(luckySevenGame(21)).toBe('Lucky');
    expect(luckySevenGame(77)).toBe('Lucky');
    expect(luckySevenGame(87)).toBe('Seven');
  });
});
