// ==============================================================================
// 1. Using a loop, print the following in the console:
// 17
// 15
// 13
// 11
// 9
// ==============================================================================
// for (let i = 17; i >= 9; i -= 2) {
//   console.log(i);
// }

//
// 2. Fizz-Buzz
//    Implement code that does the following.
//    - Counts from 1 to 100 and prints out something for each number.
//    - If the number is divisible by 3, print `"Fizz"`.
//    - If the number is divisible by 5, print `"Buzz"`.
//    - If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
//    - If the number does not meet any of the above conditions, just print the number.
//    Your output should look something like this:
//     1
//     2
//     Fizz
//     4
//     Buzz
//     Fizz
//     7
//     8
//     Fizz
//     Buzz
//     11
//     Fizz
//     13
//     14
//     FizzBuzz
//     16
//     ...
// ==============================================================================
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   }
//   if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
// }

// ==============================================================================
// For this section, write your answer in a comment below the question. Come up
// with an answer yourself before testing each question out in the console.

// 3. What will the contents of the array below be after the code sample is
// executed?
// let numbers = [2, 4, 6, 8]
// numbers.pop()
//8
// numbers.push(10)
// (2, 4, 6, 8, 10)
// numbers.unshift(3)
//5;
// 4. What is the console output of the code sample below?
// let morse = ['dot', 'pause', 'dot']
// let moreMorse = morse.join(' dash ')
// console.log(moreMorse.split(' '))
// undefined
// 5. What will the contents of the `bands` array be after the code sample below
// is executed?
// let bands = []
// let beatles = ["Paul", "John", "George", "Pete"]
// let stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// ["beatles"]
// // bands.unshift(stones)
// ["stones","beatles"]
// // bands[bands.length - 1].pop()
// beatles
// // bands[0].shift()
// 1
// // bands[1][3] = "Ringo"
// undefined

// ==============================================================================

// ==============================================================================
// 6. Lord Buckethead
const users = {
  theresa: {
    party: "Conserative",
    favoriteNumbers: [12, 42, 75],
  },
  lordBuckethead: {
    party: "Gremloids",
    favoriteNumbers: [8, 12, 24, 9],
  },
  mrFishFinger: {
    party: "Independent",
    favoriteNumbers: [12, 14, 85],
  },
};
// Using the object above:
// 6a. console.log theresa's party (i.e. the string "Conservative")
// console.log(users.theresa.party);
// 6b. console.log lordbuckethead's party (i.e. the string "Gremloids")
// console.log(users.lordBuckethead.party);
// 6c. change mrFishFinger's party to "birds eye"
// users.mrFishFinger.party = "birds eye";
// // 6d. add the number 42 to lordBuckethead's favourite numbers
// users.lordBuckethead.favoriteNumbers.push(42);
// 6e. console.log how many favourite numbers lordBuckethead has
// ==============================================================================

// ==============================================================================
// 7. The Movie Database
// Create an object to store the following information about your favorite movie:
// - title (a string)
// - duration (a number)
// - cast (an array of strings)
// myFavMovie = {
//   title: "Interstella",
//   durtion: 100000,
//   cast: ["a", "b", "c", "d"],
// };
// // Print out the movie information **in a single string** like so: "Puff the
// // Magic Dragon lasts for 30 minutes and stars Puff, Jackie, and Living
// // Sneezes." _(don't forget the **and** as well as the Oxford Comma)_
// // ==============================================================================
// console.log(
//   `${myFavMovie.title} lasts for ${myFavMovie.durtion} years and stars ${myFavMovie.cast[0]}, ${myFavMovie.cast[1]}, ${myFavMovie.cast[2]}, ${myFavMovie.cast[3]}.`
// );
// ==============================================================================
// 8. Pluraliser
// Write a function named `pluralise` that:
// - takes 2 arguments, a noun and a number.
// - returns the number and the pluralised form of the noun like "5 cats" or "1 dog".
// - **Bonus**: Make it handle a few collective nouns like "sheep" and "goose".
// console.log(pluralise('dog', 1))     // -> 1 dog
// console.log(pluralise('cat', 5))     // -> 5 cats
// console.log(pluralise('hamster', 2)) // -> 2 hamsters
// console.log(pluralise('sheep', 6))   // -> 6 sheep
// console.log(pluralise('goose', 3))   // -> 3 geese
// ==============================================================================
// const pluralise = function (noun, number) {
//   if (noun === "sheep" || noun === "goose") {
//     return `${number} ${noun}`;
//   }
//   if (number > 1) {
//     return `${number} ${noun}s`;
//   }
//   if ((number = 1)) {
//     return `${number} ${noun}`;
//   }
// };
// ==============================================================================
// 9. Lengths
// Write a function `lengths` that:
// - takes a single argument, an array of strings
// - uses an array method, not a `for` loop
// - returns an array of numbers where each number is the length of the
//   corresponding string
// ==============================================================================
const lengths = function (arr) {
  return arr.map(function (str) {
    return str.length;
  });
};
// ==============================================================================
// 10. Product Array
const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

// 10a. Using an array method, create a new array of products with a price less
//      than 10
// 10b. Using an array method, sort the array alphabetically by product name
// 10c. Using a loop or the .reduce array method (Google "JS reduce"), add up
// all the products' prices and console.log it
// ==============================================================================
// const lessThan10 = function (arr) {

}




