function countVowelsInEach(words: string[]): number[] {
  // your code here
  return words.map(countVowels)
}

function countVowels(word: string): number {
  // your code here
  let vowels = []
  for(let char of word){
    if(['a','e','i','o','u'].includes(char)){
      vowels.push(char)
    }
  }
  return vowels.length
}

export { countVowelsInEach, countVowels };
