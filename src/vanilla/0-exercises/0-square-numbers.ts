// function squareNumbers(numbers: number[]): number[] {
//   // your code here
//   return numbers.map(squareNumber);
// }

// function squareNumber(n: number): number {
//   return n*n;
// }

//arrow function
const squareNumber = (n: number) : number => n * n;

function squareNumbers(numbers: number[]): number[] {
  return numbers.map(squareNumber)
}

export { squareNumbers, squareNumber };
