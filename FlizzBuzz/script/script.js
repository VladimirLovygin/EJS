for (let num = 1; n <= 100; n++) {
    let output = "";
    if (num % 3 == 0) output += "Fizz";
    if (num % 5 == 0) output += "Buzz";
    console.log(output || num);
  }