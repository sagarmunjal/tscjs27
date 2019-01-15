

// Factorial example 
// You think you can do it? Pause the video and try it yourself. 

function factorial(n){
    var result = n <= 1 ?  1 : n * factorial(n-1);
    return result;
}

console.log(`Factorial of the number 4 is ${factorial(4)}`);
