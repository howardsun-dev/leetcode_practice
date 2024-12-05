function fizzBuzz(num: number): string[] {
  const results: string[] = [];

  for (let i = 1; i <= num; i++) {
    const fizz = i % 3 === 0 ? 'fizz' : '';
    const buzz = i % 5 === 0 ? 'Buzz' : '';
    // console.log(fizz + buzz || i);
    results.push(fizz + buzz || i.toString());
  }

  return results;
}

let num = 20;
console.log(fizzBuzz(num));
