// iFib vs rFib

// The Fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 1 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth Fibonacci number, with n=1 representing the start of the sequence.
// Note: Solve both iteratively and recursively.

// function fibonacci(n) {
//    if (n <= 2){
//      return 1;
//    }else{
//      return fibonacci(n-2) + fibonacci(n-1);
//    }
// }
// console.log(fibonacci(7));
// //Returns 21

// fibonacci(1) // should give 1
// fibonacci(2) // should give 1
// fibonacci(3) // should give 2

function fibonacci(n) {

    if(n === 1 || n === 2) return 1;

    let a = 1;
    let b = 1;
    
    for (let i = 3; i <= n; i++) {
      let next = a + b;
      a = b;
      b = next;                
    }
  return b;
}
console.log(fibonacci(4));
console.log(fibonacci(5));


// index          result 
// 3              2     a=1  b=2
// 4              3     a=2  b=3