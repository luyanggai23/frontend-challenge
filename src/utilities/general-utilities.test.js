import { makeRandomString, swapCase, shuffle } from './general-utilities';

describe('makeRandomString', () => {
  test('handles 0 length', () => {
    const randomString0Length = makeRandomString(0);
    expect(randomString0Length.length).toBe(0);
  });

  test('handles 100 length', () => {
    const randomString100Length = makeRandomString(100);
    expect(randomString100Length.length).toBe(100);
  })
});

describe('swapCase', () => {
  test('handles empty string', () => {
    const emptyString = '';
    const result = swapCase(emptyString);

    expect(result).toBe(emptyString);
  })

  test('handles caps', () => {
    const result = swapCase('A');

    expect(result).toBe('a');
  });

  test('handles lowercase', () => {
    const result = swapCase('a');

    expect(result).toBe('A');
  });

  test('handles numbers', () => {
    const result = swapCase('1');

    expect(result).toBe('1');
  })
});

describe('shuffle', () => {
  test('shuffles empty string correctly', () => {
    const emptyArray = [];
    const result = shuffle(emptyArray);

    expect(result.length).toBe(0);
  });

  test('shuffles randomly generated long string correctly', () => {
    const randomStringArray = makeRandomString(1000).split('');
    const result = shuffle(randomStringArray);
    expect(result.length).toBe(randomStringArray.length);
    expect(result.join('')).not.toMatch(randomStringArray.join(''));
    expect(result.sort().join('')).toMatch(randomStringArray.sort().join(''));
  });
});