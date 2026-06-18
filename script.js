const lookup = {
  A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
  N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
};

function rot13(encodedStr) {
  let decodedArr = []; 

  // Loop through the string character by character
  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    
    // Check if the character is an uppercase letter in our lookup table
    if (lookup[char] !== undefined) {
      decodedArr.push(lookup[char]);
    } else {
      // If it's a space, comma, period, etc., pass it through exactly as it is
      decodedArr.push(char);
    }
  }

  return decodedArr.join("");
}

// Ensure the function is available globally for the tests
window.rot13 = rot13;