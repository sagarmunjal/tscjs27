// Now let's write a complex yet simple function which calculates area of a square, rectangle, triangle. 
// You think you can do it? Pause the video and try it yourself. 

function palindrome(word){
    var length = word.length;
    var center = Math.floor(length/2);

    for (i=0;i<center;i++){
        if(word[i] !== word[length-i-1]){
            return false;
        }
    }
    return true;
}

console.log(`Is the following word entered by the user a palindrome, Answer is : - (yes ${word}`)
