export const makeRandomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const swapCase = (letters) => {
  let newLetters = "";
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      newLetters += letters[i].toUpperCase();
    } else {
      newLetters += letters[i].toLowerCase();
    }
  }
  return newLetters;
};

export const shuffle = (string) => {
  let a = string.split(""),
    n = a.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

export const createRandomArray = (length) => {
  return new Array(parseInt(length, 10))
        .fill(null)
        .map(() => makeRandomString(5));
}