const axios = require('axios');
require('dotenv').config();

const api_key = process.env.api_key;
axios.get('https://us1.locationiq.com/v1/search.php', {
  params: {
    key: api_key,
    q: 'Dallas, TX',
    format: 'json',
  },
})
  .then((response) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('ERROR');
    console.log(error.response.data);
  });


// axios
//   .get('https://us1.locationiq.com/v1/search.php', {
//     params: {
//       key: process.env['api_key'],  // discussed below
//       q: 'Seattle, Washington, USA',
//       format: 'json',
//     },
//   })
//   .then((response) => {
//     console.log('success!', response.data);
//   })
//   .catch((error) => {
//     console.log('error!', error.response.data);
//   });


// Use this file as a general scratch pad for running code.

// Run in the terminal from the project directory with
//   node src/index.js

// Or as
//   npm start

// Files other than src/index.js must be run using
//   node path/to/file.js

// Where `path/to/file.js` represents the path to the file to be run relative to
// the current working directory.

// The `Code Runner` VS Code Extension can be installed to add a Play button for
// JavaScript code.

// Refer to math.js and math.test.js for an example of a small test.
// More details will be covered in Unit 3, Tests.

// Run from the terminal with
//   npm test

// The `Jest` VS Code Extension can be installed so that the tests are detected
// Replace with the code you'd like to run
// and appear under the VS Code Testing panel.

// console.log("Hello, World!");
// 4 + 5;
// console.log(4 + 3);

// const fizzBuzz = function (num) {
//   if (num % 15 === 0) {
//     return "FizzBuzz";
//   } else if (num % 3 === 0) {
//     return "Fizz";
//   } else if (num % 5 === 0) {
//     return "Buzz";
//   } else {
//     return num;
//   }
// };

// console.log(fizzBuzz(1));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

// const calculateTotalPrice = function (order) {
//   let total = 0;

//   for (const item of order) {
//     total += item.price;
//   }
//   return total;
// };

// const myOrder = [
//   {
//     entre: "Fish Tacos",
//     price: 14.97,
//   },
//   {
//     entre: "Vegan Spaghetti",
//     price: 21.47,
//   },
// ];

// const myTotal = calculateTotalPrice(myOrder);
// console.log(`The total is $${myTotal}`);
