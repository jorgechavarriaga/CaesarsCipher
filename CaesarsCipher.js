function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let decodedStr = "";
    
    for (let index = 0; index < str.length; index++) {
      const char = str[index];
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        decodedStr += char;
      } else {
          const encodedIndex = (charIndex + 13) % 26;
          decodedStr += alphabet[encodedIndex];
      }
    }
    return decodedStr;
  }
  
  //TEST1
  var test1 = "SERR PBQR PNZC";
  console.log(rot13(test1));
  
  //TEST2
  var test2 = "SERR CVMMN!";
  console.log(rot13(test2));
  
  //TEST3
  var test3 = "SERR YBIR?";
  console.log(rot13(test3));
  
  //TEST4
  var test4 = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
  console.log(rot13(test4));