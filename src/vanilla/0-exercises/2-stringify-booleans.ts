function stringifyBooleans(strings: any[]): string[] {
  // your code here
  return strings.map(stringifyBoolean);
}

function stringifyBoolean(stringOrBoolean: boolean | string): string {
  // your code here
  let makeIntoString = "";
  if(typeof stringOrBoolean === "boolean" ){
    let booleanToString = stringOrBoolean.toString()
    let firstLetterOfBoolean = booleanToString[0].toUpperCase()
    return makeIntoString += firstLetterOfBoolean
  }
  console.log(makeIntoString)
  return makeIntoString += stringOrBoolean
}

export { stringifyBooleans, stringifyBoolean };
