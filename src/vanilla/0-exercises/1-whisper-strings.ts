// function whisperStrings(strings: string[]): string[] {
//   // your code here
//   return strings.map(whisperString)

// }

// function whisperString(string: string): string {
//   // your code here
  
//   return `shh: ${string.toLowerCase()}`;
// }

//arrow function
const whisperString = (string: string): string => `shh: ${string.toLowerCase()}`;

function whisperStrings(strings: string[]): string[] {
  return strings.map(whisperString)
}


export { whisperStrings, whisperString };
