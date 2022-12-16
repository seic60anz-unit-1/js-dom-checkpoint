// ==============================================================================
// 1. Using a loop, print the following in the console:
// 17
// 15
// 13
// 11
// 9
// ==============================================================================
const question1 = function(){
  for (let i =17; i > 8; i = i-2){
    console.log(i);
  }
}
// question1()
// ==============================================================================
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
const question2 = function(){
  for (let i =1; i <= 100; i++){
    if (i % 3 !== 0 && i % 5 !== 0){
      console.log(i);
    }else{
      if (i % 3 === 0){
        if(i % 5 ===0){
          console.log("FizzBuzz");
        }else{
          console.log("Fizz");
        }
      }else{
        console.log("Buzz");
      }
    }
  }
}
// question2();
// ==============================================================================
// For this section, write your answer in a comment below the question. Come up
// with an answer yourself before testing each question out in the console.

// 3. What will the contents of the array below be after the code sample is
// executed? 
// let numbers = [3, 2, 4, 6, 10]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)

// 4. What is the console output of the code sample below?
// let morse = ['dot', 'pause', 'dot']
// let moreMorse = morse.join(' dash ')
// console.log(moreMorse.split(' '))
// output: ["dot", "dash", "pause", "dash", "dot"]

// 5. What will the contents of the `bands` array be after the code sample below
// is executed?
// let bands = []
// let beatles = ["Paul", "John", "George", "Pete"]
// let stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// output: ["Paul", "John", "George", "Pete"]
// bands.unshift(stones)
// output: [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], "Paul", "John", "George", "Pete"]
// bands[bands.length - 1].pop()
// output: [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], "Paul", "John", "George"]
// bands[0].shift()
// output: [["Mick", "Keith", "Ronnie", "Charlie"], "Paul", "John", "George"]
// bands[1][3] = "Ringo"
// ouptput: [["Mick", "Keith", "Ronnie", "Charlie"], "Paul", "John", "George", "Ringo"]

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
// 6b. console.log lordbuckethead's party (i.e. the string "Gremloids")
// 6c. change mrFishFinger's party to "birds eye"
// 6d. add the number 42 to lordBuckethead's favourite numbers
// 6e. console.log how many favourite numbers lordBuckethead has
// ==============================================================================
const question6 = function() {
  console.log(`Theresa's party is ${users.theresa.party}`);
  console.log(`Lordbuckethead's party is ${users.lordBuckethead.party}`);

  console.log(`mrFishFinger's party is ${users.mrFishFinger.party}`);

  users.mrFishFinger.party = "birds eye";
  console.log(`mrFishFinger's new party is ${users.mrFishFinger.party}`);

  console.log(`Lodrdbuckethead's favourte numbers are ${users.lordBuckethead.favoriteNumbers}`);
  users.lordBuckethead.favoriteNumbers.push(42);
  console.log(`Lodrdbuckethead's new favourte numbers are ${users.lordBuckethead.favoriteNumbers}`);

  const sumFavouriteNumbers = users.lordBuckethead.favoriteNumbers.reduce((acc,val)=>acc+val,0);
  console.log(` lordBuckethead has ${sumFavouriteNumbers} numbers in his favorites.`);
}
// question6()

// ==============================================================================
// 7. The Movie Database
// Create an object to store the following information about your favorite movie:
// - title (a string)
// - duration (a number)
// - cast (an array of strings)

// Print out the movie information **in a single string** like so: "Puff the
// Magic Dragon lasts for 30 minutes and stars Puff, Jackie, and Living
// Sneezes." _(don't forget the **and** as well as the Oxford Comma)_
// ==============================================================================
const myMovie = {
  title: "Harry Potter and the Sorcerer's Stone",
  duration: "240 minutes",
  cast: ["Daniel", "Radcliff", "Emma Watson"]
}

const question7 = function() {
  let len = Object.keys(myMovie).length;
  let output = "";
  let line1 =" lasts for ";
  let line2 =" and stars ";
  let line3 ="."

  console.log(myMovie.title + line1 + myMovie.duration + line2 + myMovie.cast.join(", ") + line3);
// I FAILED THE TRICKY WAY. MIGHT COME BACK AFTER THE BRUTAL SOLUTION
//   let myMovieArr = Object.keys(myMovie)
//   for(let i = 0; i < len; i++){
//     let key = myMovieArr[i]
//     if(i = 0){
//       output += myMovie[key] + line1;
//     } else if(i = 1){
//       output += myMovie[key] + line2;
//     } else if(i = 2){
//       output += myMovie[key].join(", ") + line3;
//     }
//   }
//   console.log(output);
}

// question7()
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
const pluralise = function (noun, number) {
  let collectives = ["sheep", "goose"];
  let collectivesPl = ["sheep", "geese"];
  if (number < 2){
    console.log(`${number} ${noun}`)
  }else {
    if (collectives.includes(noun)) {
      let index = collectives.indexOf(noun);
      console.log(`${number} ${collectivesPl[index]}`)
    } else {
      console.log(`${number} ${noun}s`)
    }
  }
}

// pluralise("cat",2)
// ==============================================================================
// 9. Lengths
// Write a function `lengths` that:
// - takes a single argument, an array of strings
// - uses an array method, not a `for` loop
// - returns an array of numbers where each number is the length of the
//   corresponding string
// ==============================================================================
const lengths = function(arrays){
  console.log(arrays.map(x=>x.length));
}

// lengths(["Daniel", "Radcliff", "Emma Watson"])
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
// 10b. Using an array method, sort the array alphabetically by product name
// 10c. Using a loop or the .reduce array method (Google "JS reduce"), add up
// all the products' prices and console.log it
// ==============================================================================
