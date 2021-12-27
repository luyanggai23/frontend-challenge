import { shuffle, swapCase, makeRandomString } from './../utilities/general-utilities';

export const ARRAY_CHANGING_FUNCTIONS = {
  "Scramble each element": { fn: shuffle },
  "Swap case of each element": { fn: swapCase, method: "map" },
  "Add random character to each element": {
    fn: (x) => [x, makeRandomString(1)],
    method: "map",
    callFlatAtEnd: true
  },
  "Remove elements with a capital B": {
    fn: (x) => !x.includes("B"),
    method: "filter",
  },
};