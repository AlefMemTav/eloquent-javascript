for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
  
  console.log("------------------")

for (let n = 1; n <= 100; n++) {
    let output = "";

    if ((n % 3 == 0) && (n % 5 == 0)){
        output += "FizzBuzz";
        console.log(output)
    }else if (n % 3 == 0){
        output += "Fizz";
        console.log(output)
    }else if(n % 5 == 0){
        output += "Buzz";
        console.log(output)
    }else{
        console.log(n)
    }
}