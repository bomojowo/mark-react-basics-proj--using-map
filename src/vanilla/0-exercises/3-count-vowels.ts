// function countVowelsInEach(words: string[]): number[] {
//   // your code here
//   return words.map(countVowels)
// }

// function countVowels(word: string): number {
//   // your code here
//   let vowels = []
//   for(let char of word){
//     if(['a','e','i','o','u'].includes(char)){
//       vowels.push(char)
//     }
//   }
//   return vowels.length
// }

const countVowels = (word: string): number => {
  let vowels = []
  for(let char of word){
    if(['a','e','i','o','u'].includes(char)){
      vowels.push(char)
    }
  }
  return vowels.length
}

function countVowelsInEach(words: string[]): number[] {
  return words.map(countVowels);
}

export { countVowelsInEach, countVowels };
