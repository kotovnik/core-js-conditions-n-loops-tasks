/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const comparison = a > b ? a : b;
  return comparison > c ? comparison : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    king.x === queen.x ||
    king.y === queen.y ||
    king.x / king.y === queen.x / queen.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    (a === b && a + b > c && c > 0) ||
    (a === c && a + c > b && b > 0) ||
    (b === c && c + b > a && a > 0)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
/* @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const strNum = `${num}`;
  let result = '';
  if (strNum.length === 2) {
    switch (strNum[0]) {
      case '1':
        result += 'X';
        break;
      case '2':
        result += 'XX';
        break;
      case '3':
        result += 'XXX';
        break;
      default:
        break;
    }
    switch (strNum[1]) {
      case '1':
        result += 'I';
        break;
      case '2':
        result += 'II';
        break;
      case '3':
        result += 'III';
        break;
      case '4':
        result += 'IV';
        break;
      case '5':
        result += 'V';
        break;
      case '6':
        result += 'VI';
        break;
      case '7':
        result += 'VII';
        break;
      case '8':
        result += 'VIII';
        break;
      case '9':
        result += 'IX';
        break;
      case '0':
        result += '';
        break;
      default:
        break;
    }
  } else {
    switch (strNum[0]) {
      case '1':
        result += 'I';
        break;
      case '2':
        result += 'II';
        break;
      case '3':
        result += 'III';
        break;
      case '4':
        result += 'IV';
        break;
      case '5':
        result += 'V';
        break;
      case '6':
        result += 'VI';
        break;
      case '7':
        result += 'VII';
        break;
      case '8':
        result += 'VIII';
        break;
      case '9':
        result += 'IX';
        break;
      case '0':
        result += '';
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus ';
        break;
      case '.':
      case ',':
        result += 'point ';
        break;
      case '0':
        result += 'zero ';
        break;
      case '1':
        result += 'one ';
        break;
      case '2':
        result += 'two ';
        break;
      case '3':
        result += 'three ';
        break;
      case '4':
        result += 'four ';
        break;
      case '5':
        result += 'five ';
        break;
      case '6':
        result += 'six ';
        break;
      case '7':
        result += 'seven ';
        break;
      case '8':
        result += 'eight ';
        break;
      case '9':
        result += 'nine ';
        break;
      default:
        break;
    }
  }
  let cutResult = '';
  for (let i = 0; i < result.length - 1; i += 1) {
    cutResult += result[i];
  }
  return cutResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res;
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] === str[str.length - 1 - i]) {
      res = true;
    } else {
      res = false;
      break;
    }
  }
  return res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      break;
    }
    res = -1;
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;
  const strDigit = `${digit}`;
  let res = 888;
  for (let i = 0; i < strNum.length; i += 1) {
    if (strNum[i] === strDigit) {
      res = true;
      break;
    } else {
      res = false;
    }
  }
  return res;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let y = 0; y < i; y += 1) {
      leftSum += arr[y];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const resultMatrix = [];
  for (let i = 0; i < size; i += 1) {
    resultMatrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      resultMatrix[i][j] = 0;
    }
  }
  let value = 1;
  let positionLeft = 0;
  let positionTop = 0;
  let positionRight = size - 1;
  let positionBottom = size - 1;
  while (positionLeft <= positionRight && positionTop <= positionBottom) {
    for (let i = positionLeft; i <= positionRight; i += 1) {
      resultMatrix[positionTop][i] = value;
      value += 1;
    }
    positionTop += 1;
    for (let i = positionTop; i <= positionBottom; i += 1) {
      resultMatrix[i][positionRight] = value;
      value += 1;
    }
    positionRight -= 1;
    if (positionTop <= positionBottom) {
      for (let i = positionRight; i >= positionLeft; i -= 1) {
        resultMatrix[positionBottom][i] = value;
        value += 1;
      }
      positionBottom -= 1;
    }
    if (positionLeft <= positionRight) {
      for (let i = positionBottom; i >= positionTop; i -= 1) {
        resultMatrix[i][positionLeft] = value;
        value += 1;
      }
      positionLeft += 1;
    }
  }
  return resultMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const changedMatrix = matrix;
  const resultMatrix = [];
  const numberOfColumns = matrix.length;
  const numberOfRows = matrix[0].length;
  for (let i = 0; i < numberOfColumns; i += 1) {
    resultMatrix[i] = [];
    for (let j = 0; j < numberOfRows; j += 1) {
      resultMatrix[i][j] = 0;
    }
  }
  for (let j = 0; j < numberOfRows; j += 1) {
    for (let i = 0; i < numberOfColumns; i += 1) {
      resultMatrix[i][numberOfRows - 1 - j] = matrix[j][i];
    }
  }
  for (let j = 0; j < numberOfRows; j += 1) {
    for (let i = 0; i < numberOfColumns; i += 1) {
      changedMatrix[i][j] = resultMatrix[i][j];
    }
  }
  return resultMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;
  for (let i = 1; i < array.length; i += 1) {
    const currentElement = array[i];
    let indxPrevElement = i - 1;
    while (indxPrevElement >= 0 && array[indxPrevElement] > currentElement) {
      array[indxPrevElement + 1] = array[indxPrevElement];
      indxPrevElement -= 1;
    }
    array[indxPrevElement + 1] = currentElement;
  }
  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  let iterationLoop = 0;
  const index = res.length % 2 ? res.length : res.length - 1;
  do {
    let startOfString = '';
    let endOfString = '';
    for (let i = 1; i <= index; i += 2) {
      endOfString += res[i];
    }
    for (let i = 0; i <= index; i += 2) {
      startOfString += res[i];
    }
    res = startOfString + endOfString;
    iterationLoop += 1;
  } while (res !== str);
  const times =
    iterations < iterationLoop ? iterations : iterations % iterationLoop;
  for (let j = 0; j < times; j += 1) {
    let startOfString = '';
    let endOfString = '';
    for (let i = 1; i <= index; i += 2) {
      endOfString += res[i];
    }
    for (let i = 0; i <= index; i += 2) {
      startOfString += res[i];
    }
    res = startOfString + endOfString;
  }
  return res;
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberStr = `${number}`;
  let result;
  function convertStringToArray(str, index) {
    const arr = [];
    for (let s = index; s < str.length; s += 1) {
      arr.push(str[s]);
    }
    return arr;
  }
  function convertArrayToString(arr, index) {
    let str = '';
    for (let i = index; i < arr.length; i += 1) {
      str += arr[i];
    }
    return str;
  }
  const arr = convertStringToArray(numberStr, 0);
  for (let i = numberStr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      const restOfRight = convertStringToArray(arr, i);
      restOfRight.sort((a, b) => a - b);
      const swap = arr[i - 1];
      let swapIt;
      for (let k = 0; k < restOfRight.length; k += 1) {
        if (swap < restOfRight[k]) {
          swapIt = restOfRight[k];
          break;
        }
      }
      let position;
      for (let y = arr.length - 1; y > 0; y -= 1) {
        if (arr[y] === swapIt) {
          position = y;
          break;
        }
      }
      arr[i - 1] = swapIt;
      arr[position] = swap;
      const sortRestt = convertArrayToString(arr, i);
      const sortRestArr = convertStringToArray(sortRestt, 0);
      sortRestArr.sort((a, b) => a - b);
      const sortRest = convertArrayToString(sortRestArr, 0);
      const deleteCount = arr.length - i;
      for (let n = 0; n < deleteCount; n += 1) {
        arr.pop();
      }
      for (let t = 0; t < sortRest.length; t += 1) {
        arr.push(sortRest[t]);
      }
      result = convertArrayToString(arr, 0);
      break;
    }
  }
  return +result;
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
