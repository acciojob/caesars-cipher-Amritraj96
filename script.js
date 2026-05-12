function rot13(encodedStr) {
  let decodedArr = []; 
  
  // 1. Split the string into an array of characters
  // 2. Iterate through each character
  for (let i = 0; i < encodedStr.length; i++) {
    let char = encodedStr[i];

    // Check if the character exists in our lookup table
    if (lookup[char] !== undefined) {
      // If it exists, push the decoded version to our array
      decodedArr.push(lookup[char]);
    } else {
      // If it's not in the lookup (like a space or '!'), pass it through as is
      decodedArr.push(char);
    }
  }

  // Join the array back into a string and return it
  return decodedArr.join(""); 
}