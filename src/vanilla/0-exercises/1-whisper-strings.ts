function whisperStrings(strings: string[]): string[] {
  // your code here
  return strings.map(whisperString)

}

function whisperString(string: string): string {
  // your code here
  let lowercaseString = string.toLowerCase();

  return `shh: ${lowercaseString}`;
}

export { whisperStrings, whisperString };
