const byteSize = (str) => {
 /**
 * Function to calculate the byte size of a string
 * @param {string} str - The input string
 * @returns {number} - The size of the string in bytes
 */
function byteSize(str) {
  // Create a Blob object with the input string
  const blob = new Blob([str]);
  // Return the size of the Blob in bytes
  return blob.size;
}

// Examples
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요'));   // Output: 15
console.log(byteSize(''));            // Output: 0
 // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
