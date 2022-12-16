// ==============================================================================
// 1. Using a loop, print the following in the console:
// 17
// 15
// 13
// 11
// 9

// for (let i = 17; i >= 9; i = i - 2) {
//   console.log(i);
// }



// ==============================================================================


// ==============================================================================
// 2. Fizz-Buzz
//    Implement code that does the following.
//    - Counts from 1 to 100 and prints out something for each number.
//    - If the number is divisible by 3, print `"Fizz"`.
//    - If the number is divisible by 5, print `"Buzz"`.
//    - If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
//    - If the number does not meet any of the above conditions, just print the number.

// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i)
//   }
//   i++
// }



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


// ==============================================================================
// For this section, write your answer in a comment below the question. Come up
// with an answer yourself before testing each question out in the console.

// 3. What will the contents of the array below be after the code sample is
// executed? 
// let numbers = [2, 4, 6, 8]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)

// [3, 2, 4, 6, 10]

// 4. What is the console output of the code sample below?
// let morse = ['dot', 'pause', 'dot']
// let moreMorse = morse.join(' dash ')
// console.log(moreMorse.split(' '))

// [dot, dash, pause, dash, dot]

// 5. What will the contents of the `bands` array be after the code sample below
// is executed?
// let bands = []
// let beatles = ["Paul", "John", "George", "Pete"]
// let stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"

// [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]

// ==============================================================================


// ==============================================================================
// 6. Lord Buckethead
const users = {
  theresa: {
    party: "Conserative",
    favoriteNumbers: [12, 42, 75]
  },
  lordBuckethead: {
    party: "Gremloids",
    favoriteNumbers: [8, 12, 24, 9]
  },
  mrFishFinger: {
    party: "Independent",
    favoriteNumbers: [12, 14, 85]
  }
}
// Using the object above:
// 6a. console.log theresa's party (i.e. the string "Conservative")
// console.log(users.theresa.party)


// 6b. console.log lordbuckethead's party (i.e. the string "Gremloids")
// console.log(users.lordBuckethead.party)


// 6c. change mrFishFinger's party to "birds eye"
// users.mrFishFinger.party = 'birds eye'


// 6d. add the number 42 to lordBuckethead's favourite numbers
// users.lordBuckethead.favoriteNumbers.push(42)


// 6e. console.log how many favourite numbers lordBuckethead has
// console.log(users.lordBuckethead.favoriteNumbers.length)



// ==============================================================================


// ==============================================================================
// 7. The Movie Database
// Create an object to store the following information about your favorite movie:
// - title (a string)
// - duration (a number)
// - cast (an array of strings)
// const favMovie = {title: 'Good Morning', duration: 150, cast: ['Tom', 'Paul', 'John']}


// Print out the movie information **in a single string** like so:
// "Puff the Magic Dragon lasts for 30 minutes and stars Puff, Jackie, and Living
// Sneezes." _(don't forget the **and** as well as the Oxford Comma)_
// let stars = ""
// for (i in favMovie.cast) {
//   if (favMovie.cast.length === 1) {
//     stars = favMovie.cast[i]
//   } else if (parseInt(i) === favMovie.cast.length - 1) {
//     stars = stars + ' and ' + favMovie.cast[i]
//   } else if (parseInt(i) === favMovie.cast.length - 2) {
//     stars = stars + favMovie.cast[i]
//   } else if (parseInt(i) != favMovie.cast.length - 1) {
//     stars = stars + favMovie.cast[i] + ', '
//   }
// }

// console.log(`${favMovie.title} lasts for ${favMovie.duration} minutes and stars ${stars}.`)


// ==============================================================================


// ==============================================================================
// 8. Pluraliser
// Write a function named `pluralise` that:
// - takes 2 arguments, a noun and a number.
// - returns the number and the pluralised form of the noun like "5 cats" or "1 dog".

// console.log(pluralise('dog', 1))     // -> 1 dog
// console.log(pluralise('cat', 5))     // -> 5 cats
// console.log(pluralise('hamster', 2)) // -> 2 hamsters
// console.log(pluralise('sheep', 6))   // -> 6 sheep
// console.log(pluralise('goose', 3))   // -> 3 geese

// - **Bonus**: Make it handle a few collective nouns like "sheep" and "goose".
// console.log(pluralise('dog', 1))     // -> 1 dog
// console.log(pluralise('cat', 5))     // -> 5 cats
// console.log(pluralise('hamster', 2)) // -> 2 hamsters
// console.log(pluralise('sheep', 6))   // -> 6 sheep
// console.log(pluralise('goose', 3))   // -> 3 geese

// let colNouns = {singular: ['sheep', 'goose', 'mouse'], 
// plural: ['sheep', 'geese', 'mice']}

// console.log(colNouns.singular[1])
// const pluralise = function(noun, num) {
//   if (num <= 0 || num > 1) {
//     for (let i in colNouns.singular) {
//       if (colNouns.singular[i] === noun) {
//         noun = colNouns.plural[i]
//         return num + " " + noun
//       }
//     } 
//     noun = noun + 's'
//   }
//   return num + " " + noun
// }



// ==============================================================================


// ==============================================================================
// 9. Lengths
// Write a function `lengths` that:
// - takes a single argument, an array of strings
// - uses an array method, not a `for` loop
// - returns an array of numbers where each number is the length of the
//   corresponding string

// const length = function(array) {
//   i = 0;
//   result = []
//   while (i < array.length) {
//     result.push (array[i].length)
//     i++
//   }
//   return result
// }



// ==============================================================================


// ==============================================================================
// 10. Product Array
const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool"
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration"
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium"
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub"
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun"
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em"
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites"
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!"
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be."
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze"
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles"
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal"
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small"
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black"
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside"
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized"
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions."
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle..."
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in."
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it"
  }
]

// 10a. Using an array method, create a new array of products with a price less
//      than 10

const priceLess10 = [];
for (let i of products) {
  if (i.price < 10) {
    priceLess10.push(i);
  }
}



// 10b. Using an array method, sort the array alphabetically by product name
const proByAlp = [];
proByAlp = products.sort(function(a,b){
  
})




// 10c. Using a loop or the .reduce array method (Google "JS reduce"), add up
// all the products' prices and console.log it
// ==============================================================================
