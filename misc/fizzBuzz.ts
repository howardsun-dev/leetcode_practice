function fizzBuzz(num: number): void {
  for (let i = 1; i <= num; i++) {
    const fizz = i % 3 === 0 ? 'fizz' : '';
    const buzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(fizz + buzz || i);
  }
}

let num = 20;
fizzBuzz(num);
