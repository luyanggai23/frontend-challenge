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
    const result = swapCase('AAAAAAAA');

    expect(result).toBe('aaaaaaaa');
  });

  test('handles lowercase', () => {
    const result = swapCase('aaaaaaaa');

    expect(result).toBe('AAAAAAAA');
  });

  test('handles numbers', () => {
    const result = swapCase('1');

    expect(result).toBe('1');
  })
});

describe('shuffle', () => {
  test('shuffles empty string correctly', () => {
    const emptyString = '';
    const result = shuffle(emptyString);

    expect(result.length).toBe(0);
  });

  test('shuffles randomly generated long string correctly', () => {
    const randomString = makeRandomString(1000);
    const result = shuffle(randomString);
    expect(result.length).toBe(randomString.length);
    expect(result).not.toMatch(randomString);

    const sortString = (string) => {
      const stringArray = string.split('');
      stringArray.sort();
      return stringArray.join('');
    }

    let sortedInput = sortString(randomString);
    let sortedOutput = sortString(result);
    expect(sortedInput).toMatch(sortedOutput);
  });
});