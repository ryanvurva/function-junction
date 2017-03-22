/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

function max(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a
        } else {
            return c
        }
    } else {
        if (b > c) {
            return b
        } else {
            return c
        }
    }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b) {
    let answer = a + b
    return answer
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

function sumOfArray(num) {
    var sum = 0
    for (var i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(vowel) {
    return vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U'
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

function rovarspraket (text) {
  let string = text.toString()
  let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('')
  let place = ''
  for (let i = 0; i < string.length; i++) {
    if (consonants.indexOf(string.charAt(i)) >= 0) {
      place = place + string.charAt(i) + 'o' + string.charAt(i)
    } else {
      place = place + string.charAt(i)
    }
  }
  return place
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(string) {
    let splitString = string.split('')
    let reverseString = splitString.reverse()
    let joinString = reverseString.join('')
    return joinString
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord (sentence) {
  let splitSentence = sentence.split(' ')
  let longestLength = 0
  let longestWord
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].length > longestLength) {
      longestLength = splitSentence[i].length
      longestWord = splitSentence[i]
    }
  }
  return longestWord
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
    t.is(max(1, 3), 3)
    t.is(max(0, 3), 3)
    t.is(max(10, 3), 10)
    t.is(max(-1, -3), -1)
    t.is(max('aaa', 0), 0)
    t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
    t.is(maxOfThree(1, 3, 2), 3)
    t.is(maxOfThree(0, 3, -1), 3)
    t.is(maxOfThree(10, 3, 50), 50)
    t.is(maxOfThree(-1, -3, -10), -1)
    t.is(maxOfThree('aaa', 0, 1), 1)
    t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
    t.is(sum(8, 11), 19)
    t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
    t.is(sumOfArray([1, 2]), 3)
    t.is(sumOfArray([1, 2, 3]), 6)
    t.is(sumOfArray([10, 9, 8]), 27)
    t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
    t.is(isVowel(0), false)
    t.is(isVowel('B'), false)
    t.is(isVowel('b'), false)
    t.is(isVowel('a'), true)
    t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
    t.is(reverse('books'), 'skoob')
    t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
    t.is(findLongestWord('book dogs'), 'book')
    t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
