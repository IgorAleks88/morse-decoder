"use strict";

var MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  var arr = new Array();
  var k = expr.length / 10;

  for (i = 0; i < k; i++) {
    arr[i] = expr.slice(0 + i * 10, 10 + i * 10);
  }

  arr = arr.map(function (element) {
    var n = element.indexOf('1');

    if (n > 1) {
      return element.slice(n);
    } else {
      return element;
    }
  });

  for (var _i = 0; _i < arr.length; _i++) {
    if (arr[_i] == '**********') {
      arr[_i] = ' ';
    } else {
      var currStr = new String();
      var m = arr[_i].length / 2;

      for (var j = 0; j < m; j++) {
        if (arr[_i].charAt(j * 2 + 1) == '0') {
          currStr = currStr + '.';
        } else {
          currStr = currStr + '-';
        }
      }

      currStr = MORSE_TABLE[currStr];
      arr[_i] = currStr;
    }
  }

  expr = arr.join('');
  return expr;
}

module.exports = {
  decode: decode
};