function isPalindrome(word) {
  const cleanWord = word.toLowerCase();

  //revere a palavra.
  const reversedWord = cleanWord.split("").reverse().join("");

  //verifica se são iguais.
  return cleanWord === reversedWord;
}

const wordsToTest = ["arara", "banana", "radar", "javascript", "reconocer", "palindrome"];

wordsToTest.forEach(word => {
  const result = isPalindrome(word) ? "é um palindromo" : "não é um palindromo";

  console.log(`A palavra "${word}" ${result}.`);
});
