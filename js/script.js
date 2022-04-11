

for (let i = 1; i <= 100; i++) {

    let string
    if (i %  15 === 0) {
        string = "FizzBuzz"
    } else if (i % 5 === 0) {
        string = "Buzz"
    } else if (i % 3 === 0) {
        string = "Fizz"
    } else {
        
    }
    
    console.log(i, string);
    
}